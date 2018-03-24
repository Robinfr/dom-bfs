# DOM Breadth-first-search

Allows you to easily perform a breadth-first-search (BFS) through DOM elements.

## Installation

Run the following command to install:

```bash
npm install dom-bfs --save
```

## Usage

First import:

```javascript
import domBFS from 'dom-bfs';
```

And then supply the initial DOM element and the condition for when a DOM element should be returned:

```javascript
domBFS(startingElement, element => element.className === 'orange');
```

## TypeScript typings

TypeScript typings are included in the project.
