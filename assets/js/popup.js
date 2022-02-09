const contentPopup = `

<div class="content-popup" pfr-select="setTimePopup">
    <div class="box-popup">
        <div class="content">
            <h2>Nota</h2>
            <div>
                <p>
                    Esse site foi montado a partir do curso de Flexbox da Origamid, sendo assim, o seu objetivo não é trazer uma inivação em layout, apresentar animações ou funções avançadas, mas sim o uso de flexbox para a constução de elementos comuns na web.
                </p>
                <p>
                    É importante lembrar que, embora o projeto tenha a sua origem de um curso, essa versão apresentada pode conter alguns detalhes (visíveis ou não) modificados por mim. Isso é: posso ter mudado algumas coisas do projeto original como uma forma de estudar outras funções ou puramente por diversão.
                </p>
                <p>
                    Agradeço pela sua visualização! Clique <a href="" class="link" pfr-select="link-github">aqui</a> caso queira ver o código do projeto.
                </p>
            </div>
            <button pfr-select="btn-close-popup">Fechar</button>
        </div>
    </div>
</div>

`;

( document.body ).insertAdjacentHTML( 'beforeend', contentPopup )

setTimeout( () => {
    document.querySelector( '[pfr-select="link-github"]' ).setAttribute( 'href', 'https://github.com/PedroFigueiraRuivo/FlexBlog-Curso' )
    const myPopup = document.querySelector( '[pfr-select="setTimePopup"]' );
    const closeBtn = document.querySelector( '[pfr-select="btn-close-popup"]' );

    myPopup.classList.add( 'active' )

    closeBtn.addEventListener( 'click', () => myPopup.classList.remove( 'active' ) );
}, 5000 );