function change_all(){
    if (document.getElementsByTagName('div')[4].innerHTML==='Крейцер')
    {
        document.getElementsByTagName('div')[4].innerHTML='Kreutzer'
        document.getElementsByTagName('div')[5].innerHTML='Scarlett'
        document.getElementsByTagName('div')[6].innerHTML='-'
        document.getElementsByTagName('div')[0].innerHTML='Rome'
        document.getElementsByTagName('div')[7].innerHTML='Fem &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11.05.1991 '
    }
    else
        if (document.getElementsByTagName('div')[4].innerHTML==='Kreutzer')
        {
            document.getElementsByTagName('div')[4].innerHTML='Крейцер'
            document.getElementsByTagName('div')[5].innerHTML='Скарлетт'
            document.getElementsByTagName('div')[6].innerHTML='-'
            document.getElementsByTagName('div')[0].innerHTML='Рим'
            document.getElementsByTagName('div')[7].innerHTML='Жен &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11.05.1991 '
        }
}

change=document.getElementById('change')

change.addEventListener('click', change_all)