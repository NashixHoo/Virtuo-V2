let bpm=74;

const screens={

home:`

<section class="glass">

<span class="pill">VIRTUO READY</span>

<h2 class="hero">Bom dia.</h2>

<p class="subtitle">
Seu próximo ensaio já está preparado.
</p>

<div class="row">

<a class="button primary" href="#" onclick="show('ensaio')">
Abrir Ensaio
</a>

<a class="button secondary" href="#" onclick="show('band')">
Modo Banda
</a>

</div>

</section>

<div class="grid">

<div class="tile">
<div class="icon">🎸</div>
<h3>Modo Ensaio</h3>
<p>Organize repertórios.</p>
</div>

<div class="tile">
<div class="icon">🥁</div>
<h3>Modo Banda</h3>
<p>Treine com BPM.</p>
</div>

<div class="tile">
<div class="icon">🎤</div>
<h3>Modo Ministro</h3>
<p>Toque sem distrações.</p>
</div>

<div class="tile">
<div class="icon">🎧</div>
<h3>Ouvir Agora</h3>
<p>YouTube e Spotify.</p>
</div>

</div>

<section class="glass">

<div class="song-cover">🎵</div>

<span class="pill">RAQUEL PEREIRA</span>

<h2>Mistério na Olaria</h2>

<p class="subtitle">
Tom G • 74 BPM
</p>

<div class="row">

<a class="button primary"
target="_blank"
href="https://www.youtube.com/results?search_query=Mistério+na+Olaria+Raquel+Pereira">
YouTube
</a>

<a class="button secondary"
target="_blank"
href="https://open.spotify.com/search/Mistério%20na%20Olaria%20Raquel%20Pereira">
Spotify
</a>

</div>

</section>

`,

ensaio:`

<section class="glass">

<span class="pill">MODO ENSAIO</span>

<h2>Culto Domingo</h2>

<p class="subtitle">
Versão oficial da banda.
</p>

<div class="grid">

<div class="tile">
<div class="icon">🎸</div>
<h3>Guitarra</h3>
<p>Tom G</p>
</div>

<div class="tile">
<div class="icon">🎹</div>
<h3>Teclado</h3>
<p>BPM 74</p>
</div>

<div class="tile">
<div class="icon">🥁</div>
<h3>Bateria</h3>
<p>Pronta</p>
</div>

<div class="tile">
<div class="icon">🎤</div>
<h3>Vocal</h3>
<p>Versão Easy Play</p>
</div>

</div>

</section>

`,

band:`

<section class="glass">

<span class="pill">MODO BANDA</span>

<div class="dial">${bpm}</div>

<div class="controls">

<button onclick="bpm--;show('band')">−</button>

<button>▶</button>

<button onclick="bpm++;show('band')">+</button>

</div>

<p class="subtitle" style="text-align:center">
Bateria • Baixo • Teclado
</p>

</section>

`,

library:`

<section class="glass">

<span class="pill">BIBLIOTECA</span>

<h2>Biblioteca Worship</h2>

<div class="grid">

<div class="tile">
<div class="icon">🎵</div>
<h3>Mistério na Olaria</h3>
<p>Raquel Pereira</p>
</div>

<div class="tile">
<div class="icon">🎵</div>
<h3>O Escudo</h3>
<p>Aline Barros</p>
</div>

<div class="tile">
<div class="icon">🎵</div>
<h3>Deus do Impossível</h3>
<p>Gospel</p>
</div>

<div class="tile">
<div class="icon">🎵</div>
<h3>Fogo Santo</h3>
<p>Worship</p>
</div>

</div>

</section>

`,

profile:`

<section class="glass">

<div class="song-cover" style="height:120px;">👤</div>

<h2>Nashix Hoo</h2>

<p class="subtitle">
Criador do Virtuo
</p>

<div class="grid">

<div class="tile">
<div class="icon">⭐</div>
<h3>5.0</h3>
<p>Reputação</p>
</div>

<div class="tile">
<div class="icon">✨</div>
<h3>Fundador</h3>
<p>Founder Edition</p>
</div>

</div>

</section>

`

};

function show(name){
document.getElementById("app").innerHTML=screens[name];
}

show("home");

if("serviceWorker" in navigator){
navigator.serviceWorker.register("sw.js").catch(()=>{});
}
