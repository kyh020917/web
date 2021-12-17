document.addEventListener("click", (e) => {
    //create span for snowflake
    var snowflake = document.createElement("sapn");
    snowflake.classList.add("snowflake");

    //set snowflake position
    snowflake.style.left = e.offsetX + "px";
    snowflake.style.top = e.offsetY + "px";

    //select random size
    var size = Math.random() * (100 - 20 + 1) + 20;
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";
    document.body.appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, 2000);
});