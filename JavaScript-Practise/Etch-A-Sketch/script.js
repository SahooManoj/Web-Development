document.addEventListener('DOMContentLoaded', () => {
    let gridSize = 16;

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function createGrid(size) {
        const container = document.querySelector("#container");
        container.innerHTML = '';
        let pixelSize = `${480 / size}px`;

        for (i = 0; i < size * size; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridSquare.style.cssText = `width: ${pixelSize}; height: ${pixelSize}`;

            gridSquare.addEventListener('mouseenter', () => {
                gridSquare.style.backgroundColor = getRandomColor();
            });

            container.appendChild(gridSquare);
        }
    }

    function resetGrid() {
        let newSize = prompt('Enter the number of squares per side for the new grid (max 100):');
        newSize = parseInt(newSize);

        if (newSize > 0 && newSize <= 100) {
            createGrid(newSize);
        }
        else {
            alert('Please enter a valid number between 1 and 100.');
        }
    }

    createGrid(gridSize) ;

    const resetBtn = document.querySelector("#reset");

    resetBtn.onclick = () => resetGrid() ;
});
