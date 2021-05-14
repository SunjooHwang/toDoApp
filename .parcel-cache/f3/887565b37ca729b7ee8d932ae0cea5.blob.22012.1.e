* {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}

li {
  list-style: none;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.list-container {
  width: 50%;
  height: 100vh;
}
.list-container .list-title {
  font-size: 2rem;
  text-transform: uppercase;
}

.btn {
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  text-align: right;
}

.to_do {
  background-color: #f2e529;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(5, 20%);
  column-gap: 1rem;
  grid-template-areas: " . . . ." "nav list-container list-container list-container" " . list-container list-container list-container" " . . . ." " . . . .";
}
.to_do--nav {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  grid-area: nav;
}
.to_do--nav label {
  color: #918581;
  font-size: 1.2rem;
  text-align: right;
}
.to_do--list-container {
  background-color: white;
  grid-area: list-container;
}

.done {
  background-color: #0d0d0d;
}