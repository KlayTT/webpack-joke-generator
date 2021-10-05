const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="main-container">
        <div id="button-container"></div>
        <div id="joke-container"></div>
        <div id="punch-container"></div>
    </div>
    `;
};

export default domBuilder;
