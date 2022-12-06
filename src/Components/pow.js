function power(x, n)
{
    let  store = 1
    for(let i = 0 ; i < n; i++)
    {
        store *= x;
    }
    return store;
}
power(2,3)