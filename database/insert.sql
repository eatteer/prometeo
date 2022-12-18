INSERT INTO users ( username, created_at) VALUES ("debviluke", now());
INSERT INTO users (username, created_at) VALUES ("kake", now());
INSERT INTO users (username, created_at) VALUES ("juanry", now());

INSERT INTO boards (title, created_by_id, created_at) VALUES ("Prometeo development", 1, now());

-- Auto associate user creator to the board just created
INSERT INTO users_boards (user_id, board_id, joined_at) VALUES (1, 1, now());
-- kake joins to board
INSERT INTO users_boards (user_id, board_id, joined_at) VALUES (2, 1, now());
-- debviluke asks to juanry join the board
INSERT INTO invitations (board_id, invitation_state_id) VALUES (1, 1);
INSERT INTO users_invitations (host_id, guest_id, invitation_id) VALUES (1, 3, 1);

INSERT INTO lists (title, board_id, created_at) VALUES ("Todo", 1, now());
INSERT INTO lists (title, board_id, created_at) VALUES ("In progress", 1, now());

INSERT INTO tasks (title, list_id, created_at) VALUES ("Practice React", 1, now());

INSERT INTO users_tasks (user_id, task_id) VALUES (2, 1);

INSERT INTO invitation_states (name) VALUES ("Pending");
INSERT INTO invitation_states (name) VALUES ("Accepted");
INSERT INTO invitation_states (name) VALUES ("Rejected");	