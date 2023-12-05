-- Insert data into project_project
drop database if exists protask;
create database protask;

use protask;
-- Insert data into workspace_workspace
SET FOREIGN_KEY_CHECKS=0;
INSERT INTO workspace_workspace (
    slug,
    name,
    description,
    created_at,
    updated_at,
    owner_id
)
VALUES
    ('my-company', 'My company', '123', '2023-12-03 09:09:53.672567', '2023-12-03 09:09:53.672567', 1);

INSERT INTO project_project (
    budget,
    budget_spend,
    title,
    description,
    created_at,
    updated_at,
    completed_at,
    total_points,
    task_count,
    points_done,
    progress,
    state,
    starts_at,
    ends_at,
    owner_id,
    workspace_id,
    slug
)
VALUES
    (50000, 0, 'Project 1', 'Project 1 ne', NOW(), NOW(), NULL, 0, 0, 0, 0, 0, '2023-12-04', '2023-12-28', 1, 1, 'project-1'),
    (40000, 0, 'Project 2', 'Project 2 ne', NOW(), NOW(), NULL, 0, 0, 0, 0, 0, '2023-12-11', '2023-12-22', 1, 1, 'project-2'),
    (20000, 0, 'Project 3', 'Project 3 ne', NOW(), NOW(), NULL, 0, 0, 0, 0, 0, '2023-11-30', '2023-12-30', 1, 1, 'project-3');

-- Insert data into task_section
INSERT INTO task_section (
    budget,
    budget_spend,
    title,
    description,
    created_at,
    updated_at,
    completed_at,
    total_points,
    task_count,
    points_done,
    progress,
    weight,
    priority,
    project_id,
    section_leader_id,
    state
)
VALUES
    (5000, 0, 'Section 1', 'section 1 ne', '2023-12-03 19:10:48.562542', '2023-12-03 09:56:00.162471', NULL, 0, 0, 0, 0, 1, 1, 1, 1, 2),
    (4000, 0, 'Section 1', '123', '2023-12-03 20:39:45.117731', '2023-12-03 11:29:27.799811', NULL, 0, 0, 0, 0, 1, 1, 3, 1, 1),
    (2000, 0, 'Section 2', 'Section 2 ne', '2023-12-03 17:28:16.447422', '2023-12-03 17:28:16.447422', NULL, 0, 0, 0, 0, 1, 1, 1, 1, 1),
    (3000, 0, 'Section 1', 'Section 1 ne', '2023-12-03 19:52:56.012704', '2023-12-03 19:52:56.012704', NULL, 0, 0, 0, 0, 1, 1, 2, 1, 1);
    
DELIMITER //

-- Trigger to calculate points before inserting into task
DROP TRIGGER IF EXISTS before_insert_task;
CREATE TRIGGER before_insert_task
BEFORE INSERT ON task_task
FOR EACH ROW
BEGIN
    -- Calculate points
    SET NEW.points = NEW.priority * 3 + NEW.weight * 2;
END;
//
-- Trigger to update total_points and task_count after inserting into task
DROP TRIGGER IF EXISTS after_insert_task;
CREATE TRIGGER after_insert_task
AFTER INSERT ON task_task
FOR EACH ROW
BEGIN
    -- Update total_points and task_count in associated section
    UPDATE task_section
    SET total_points = total_points + NEW.points,
        task_count = task_count + 1
    WHERE id = NEW.section_id;
	
    -- Update total_points and task_count in associated project
    UPDATE project_project
    SET total_points = total_points + NEW.points,
        task_count = task_count + 1
    WHERE id = NEW.project_id;
    
    -- Calculate progress if progress is not 0
    IF NEW.points != 0 THEN
        UPDATE task_section
        SET progress = CASE
            WHEN total_points > 0 THEN points_done / total_points * 100
            ELSE 0
        END
        WHERE id = NEW.section_id;

        UPDATE project_project
        SET progress = CASE
            WHEN total_points > 0 THEN points_done / total_points * 100
            ELSE 0
        END
        WHERE id = NEW.project_id;
    END IF;
END;
//
DELIMITER ;

DROP TRIGGER IF EXISTS after_update_task_state;
DELIMITER //
-- Trigger to update points_done and section state after updating task state
CREATE TRIGGER after_update_task_state
AFTER UPDATE ON task_task
FOR EACH ROW
BEGIN
	IF NEW.state != 1 THEN
        UPDATE task_section
        SET state = 2
        WHERE id = NEW.section_id;
    END IF;

    -- Update Project state to 1 if it is currently 0
    UPDATE project_project
    SET state = 1
    WHERE id = NEW.project_id AND state = 0;
    -- Check if the state is updated to 4
    IF NEW.state = 4 AND OLD.state != 4 THEN
        -- Update points_done in associated section
        UPDATE task_section
        SET points_done = points_done + NEW.points,
			progress = CASE
            WHEN total_points > 0 THEN points_done / total_points * 100
            ELSE 0
			END,
            state = CASE
                WHEN (points_done / total_points) = 1 THEN 4
                ELSE state
            END,
            completed_at = CASE
				WHEN state = 4 then now()
                else null
			END
        WHERE id = NEW.section_id;

        -- Update points_done in associated project
        UPDATE project_project
        SET points_done = points_done + NEW.points,
			progress = CASE
			WHEN total_points > 0 THEN points_done / total_points * 100
            ELSE 0
			END,
			state = CASE
                WHEN (points_done / total_points) = 1 THEN 2
                ELSE state
            END,
            completed_at = CASE
				WHEN state = 2 then now()
                else null
			END
        WHERE id = NEW.project_id;
    END IF;
END;
//
DELIMITER ;



DELIMITER //

-- Trigger to update total_points, task_count, and points_done after deleting a task
DROP TRIGGER IF EXISTS after_delete_task;
CREATE TRIGGER after_delete_task
AFTER DELETE ON task_task
FOR EACH ROW
BEGIN
    -- Update total_points and task_count in associated section
    UPDATE task_section
    SET total_points = total_points - OLD.points,
        task_count = task_count - 1
    WHERE id = OLD.section_id;

    -- Update total_points, task_count, and points_done in associated project
    UPDATE project_project
    SET total_points = total_points - OLD.points,
        task_count = task_count - 1,
        points_done = points_done - OLD.points
    WHERE id = OLD.project_id;
END;
//
DELIMITER ;



DROP TRIGGER IF EXISTS after_delete_section
DELIMITER //
-- Trigger to update project after deleting a section
CREATE TRIGGER after_delete_section
AFTER DELETE ON task_section
FOR EACH ROW
BEGIN
    DECLARE project_id INT;

    -- Get the project ID associated with the deleted section
    SELECT project_id INTO project_id FROM task_section WHERE id = OLD.id;

    -- Update task_count, points_done, total_points, and progress in the project
    UPDATE project_project
    SET task_count = task_count - OLD.task_count,
        points_done = points_done - OLD.points_done,
        total_points = total_points - OLD.total_points,
        progress = CASE
            WHEN total_points > 0 THEN points_done / total_points * 100
            ELSE 0
        END
    WHERE id = project_id;
END;
//
DELIMITER ;

INSERT INTO task_task (title, description, created_at, updated_at, weight, priority, state, assignee_id, assignor_id, project_id, section_id)
VALUES ('Task 1', 'Description 1', NOW(), NOW(), 1, 2, 3, 1, 2, 1, 1);
-- Insert tasks with different states into Section 4 of Project 1
INSERT INTO task_task (title, description, created_at, updated_at, weight, priority, state, assignee_id, assignor_id, project_id, section_id)
VALUES
    ('Task State 4', 'Description 4', NOW(), NOW(), 1, 2, 4, 1, 2, 1, 1),
    ('Task State 2', 'Description 2', NOW(), NOW(), 1, 2, 2, 1, 2, 1, 1),
    ('Task State 1', 'Description 1', NOW(), NOW(), 1, 2, 1, 1, 2, 1, 1);



