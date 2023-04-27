console.log('This is drag and drop game');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox'
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    })
}

//drag drop in one place 

// let dragged = null;

// const source = document.getElementById("draggable");
// source.addEventListener("dragstart", (event) => {
//   // store a ref. on the dragged elem
//   dragged = event.target;
// });

// const target = document.getElementById("droptarget");
// target.addEventListener("dragover", (event) => {
//   // prevent default to allow drop
//   event.preventDefault();
// });

// target.addEventListener("drop", (event) => {
//   // prevent default action (open as link for some elements)
//   event.preventDefault();
//   // move dragged element to the selected drop target
//   if (event.target.className === "whiteBox") {
//     dragged.parentNode.removeChild(dragged);
//     event.target.appendChild(dragged);
//   }
// });

