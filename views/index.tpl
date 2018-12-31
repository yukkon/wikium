<html>
  <head>
    <link rel="stylesheet" href="/build/main.css"/>
    <link rel="stylesheet" href="/build/games.css"/>
  </head>
  <body>
    <main class="games main-content main-content--purple">
      <div class="games__inner main-content__inner">
        <aside class="sidenav">
          <ul class="sidenav__list">
          {% groups %}
            <li class="sidenav__item" data-skill="{{ code }}" data-state="active">
              <a class="sidenav__link" href="#">
                <span class="sidenav__group">{{ name }} </span>
                <span class="sidenav__quantity">{{ games_count }} </span>
              </a>
            </li>
          {% / %}
          </ul>
        </aside>
        <section class="games-content card">
        {% groups %}
          <div class="games-content__group" data-skill="{{ code }}" style="">
            <h2 class="games-content__group-title">{{ name }} </h2>
            <div class="games-content__items">
            {% games %}
              <article class="game-preview card games-content__item" data-is-mobile="true" data-mode="prod" data-state="accessible" data-game="{{ code }}">
                <a class="game-preview__link" href="/game/{{ code }}">
                  <div class="game-preview__img-wrap">
                    <img class="game-preview__img" height="124" src="/build/img/games/{{ code }}.svg" alt="{{ name }}">
                  </div>
                  <div class="game-preview__about">
                    <h3 class="game-preview__title">{{ title }} </h3>
                    <p class="game-preview__group"></p>
                  </div>
                </a>
              </article>
            {% / %}
            </div>
          </div>
        {% / %}
        </section>
      </div>
    </main>
  </body>
</html>