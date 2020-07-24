# Catálogo de Apps Educativos para Linux

> Melhor visualizado em: [https://appsedu.github.io/catalog-apps/](https://appsedu.github.io/catalog-apps/)

> A opção `Como instalar` assume que você esteja utilizando o _WinuniX OS_ ou outra distribuição linux com o [Repositório do WinuniX 20](https://winunix.github.io/debian/) adicionado corretamente.

> Encontrou algum erro ou quer indicar um app open-source compatível com Debian / Ubuntu para o catálogo? [Entre em contato conosco pelo Github criando uma issue!](https://github.com/appsedu/catalog-apps/issues)

<div id="list-of-apps"></div>

<table id="modelBox" style="display: none;">
    <thread>
        <tr>
            <th colspan="2" class="appName">My App</th>
        </tr>
    </thread>
    <tbody>
        <tr>
            <td align="right"><i>Descrição</i></td>
            <td lign="left" class="descriptionText"></td>
        </tr>
        <tr>
            <td align="right"><i>Página Oficial</i></td>
            <td lign="left"><a href="#" class="pageUrl"></a></td>
        </tr>
        <tr>
            <td align="right"><i>Como instalar</i></td>
            <td align="left" class="installCode">
            </td>
        </tr>
        <tr>
            <td align="right"><i>Screenshot</i></td>
            <td align="left">
                <a href="#" class="imgUrlLink" target="blank"><img width="320px" class="imgUrl" src=""></a>
            </td>
        </tr>
        <tr>
            <td align="right"><i>Categoria</i></td>
            <td align="left" class="categoryName">
            </td>
        </tr>
    </tbody>
</table>

<h4>Total que apps catalogados: <span id="numCatalog"></span></h4>

<script>
var apps;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        apps = JSON.parse(this.responseText);
        for (i in apps) {
            var item = document.getElementById('modelBox').cloneNode(true);
            item.style.display = 'block';
            item.getElementsByClassName('appName')[0].innerHTML = apps[i].app;
            item.getElementsByClassName('descriptionText')[0].innerHTML = apps[i].text;
            item.getElementsByClassName('pageUrl')[0].innerHTML = apps[i].page;
            item.getElementsByClassName('pageUrl')[0].setAttribute('href', apps[i].page);
            item.getElementsByClassName('imgUrl')[0].setAttribute('src', apps[i].img);
            item.getElementsByClassName('imgUrlLink')[0].setAttribute('href', apps[i].img);
            item.getElementsByClassName('categoryName')[0].innerHTML = apps[i].categories.join(', ');

            var installCode = item.getElementsByClassName('installCode')[0];
            var codigo = apps[i].install;
            var inner = "";

            if (Array.isArray(codigo)) {
                for(j in codigo)
                    inner += `<code>${codigo[j]}</code><br>`;
            } else
                inner = `<code>${codigo}</code>`;
            
            installCode.innerHTML = inner;
            document.getElementById('list-of-apps').appendChild(item);
        }
        document.getElementById('numCatalog').innerHTML = apps.length;
    }
};

xhttp.open("GET", "apps.json", true);
xhttp.send();
document.querySelector('h1').remove();
</script>
