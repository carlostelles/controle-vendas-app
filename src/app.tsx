import * as ReactDOM from 'react-dom';

const ROOT = document.getElementById("root");

function unmonutRender(element: React.ReactElement) {
    ReactDOM.unmountComponentAtNode(ROOT);
    ReactDOM.render(element, document.body);
}

unmonutRender(
    <>
        <h1>Hello World!</h1>
    </>
);
