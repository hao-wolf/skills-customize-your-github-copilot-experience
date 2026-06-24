# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Learn how to build and run a simple REST API using FastAPI, including defining endpoints, handling request data, and returning JSON responses.

## 📝 Tasks

### 🛠️ Create the API Service

#### Description

Set up a FastAPI application with a main file and define the initial API routes.

#### Requirements
Completed program should:

- Install and import `fastapi` and `uvicorn`.
- Create a FastAPI app instance.
- Define a root endpoint (`/`) that returns a JSON welcome message.
- Start the app using `uvicorn` if the file is run directly.

### 🛠️ Implement CRUD Endpoints

#### Description

Add REST endpoints to manage a small in-memory list of items, including retrieval, creation, updating, and deletion.

#### Requirements
Completed program should:

- Define an in-memory list of dictionaries to store item data.
- Add a `GET /items` endpoint that returns all items.
- Add a `GET /items/{item_id}` endpoint that returns the item with the specified ID.
- Add a `POST /items` endpoint that accepts JSON and adds a new item.
- Add a `PUT /items/{item_id}` endpoint that updates an existing item.
- Add a `DELETE /items/{item_id}` endpoint that removes an item.

### 🛠️ Validate and Document the API

#### Description

Use Pydantic models for request validation and make sure the API is easy to test through automatic docs.

#### Requirements
Completed program should:

- Define a Pydantic model for request data.
- Use the model in `POST` and `PUT` operations.
- Return JSON responses for all endpoints.
- Confirm API docs are available at `/docs` when the server is running.

#### Example usage

```bash
curl http://127.0.0.1:8000/items
curl -X POST http://127.0.0.1:8000/items -H "Content-Type: application/json" -d '{"name":"Sample","price":9.99}'
```
