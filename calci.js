let output = document.getElementById("op");

function display(num)
{
    output.value += num;
}
function Calculate()
{
    try
    {
    output.value = eval(output.value);
    }
    catch(err)
    {
        alert("continue");
    }

}
function Clear()
{
    output.value = "";
}
function del()
{
    output.value = output.value.slice(0,-1);
}