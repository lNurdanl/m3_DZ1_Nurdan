const InnInput = document.querySelector("#InnInput")
const InnCheck = document.querySelector(".InnCheck")
const InnResult = document.querySelector(".InnResult")
const InnRegEX0 = /^0\d{13}$/;
const InnRegEX1 = /^1\d{13}$/;
InnCheck.addEventListener('click', () => {
    if (InnRegEX0.test(InnInput.value)){
        InnResult.innerText = 'ИНН правильный';
        InnResult.style.color = "green";
    } else if (InnRegEX1.test(InnInput.value)){
        InnResult.innerText = 'ИНН правильный';
        InnResult.style.color = "green";
    } else {
           InnResult.innerText = 'ИНН неправильный';
           InnResult.style.color = "red";
    }
});

const SmallBlock = document.querySelector(".secondblock")
SmallBlock.addEventListener('click', () =>{
    SmallBlock.style.left=`${1400}px`
})

