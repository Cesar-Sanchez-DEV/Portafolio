<script lang="ts">
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
	import Tabs from "$lib/components/Tabs.svelte";
	import Tab from "$lib/components/Tab.svelte";

	// Datos de ejemplo
	let user = {
		name: "César Sanchez Moreno",
		role: "Desarrollador web",
		email: "cesar@example.com",
		phone: "+34 123 456 789",
		location: "Madrid, España",
		github: "#",
		linkedin: "#",
		twitter: "#"
	};
</script>

<div class="container" in:fly={{y: 20, duration: 500}}>
	<section class="profile-card-modern">
		<div class="card-header-gradient">
			<div class="avatar-modern"></div>
		</div>
		<h2>{user.name}</h2>
		<p class="role">{user.role}</p>
		<div class="status-row">
			<span class="status-available">Disponible</span>
			<span class="exp-pill">5 años exp.</span>
		</div>
		<div class="info-modern">
			<div><i class="bx bx-envelope"></i> <span class="label">Email</span><br><span>{user.email}</span></div>
			<div><i class="bx bx-phone"></i> <span class="label">Teléfono</span><br><span>{user.phone}</span></div>
			<div><i class="bx bx-map"></i> <span class="label">Ubicación</span><br><span>{user.location}</span></div>
			<div><i class="bx bx-link"></i> <span class="label">Sitio web</span><br><span class="web-link">cesarsanchez.dev</span></div>
		</div>
		<div class="skills-section">
			<span class="skills-label">Habilidades principales</span>
			<div class="skills-tags">
				<span class="tag">React</span>
				<span class="tag">Next.js</span>
				<span class="tag">TypeScript</span>
				<span class="tag">Node.js</span>
				<span class="tag">Tailwind</span>
			</div>
		</div>
		<div class="languages-section">
			<span class="skills-label">Idiomas</span>
			<div class="lang-row">
				<span>Español</span>
				<div class="lang-dots"><span class="dot active"></span><span class="dot active"></span><span class="dot active"></span><span class="dot active"></span></div>
			</div>
			<div class="lang-row">
				<span>Inglés</span>
				<div class="lang-dots"><span class="dot active"></span><span class="dot active"></span><span class="dot active"></span><span class="dot"></span></div>
			</div>
		</div>
		<div class="social-modern">
			<a href={user.github} class="github" aria-label="Github de César Sanchez Moreno" target="_blank"><i class="bx bxl-github"></i></a>
			<a href={user.linkedin}  class="linkedin" aria-label="Linkedin de César Sanchez Moreno" target="_blank"><i class="bx bxl-linkedin"></i></a>
			<a href={user.twitter} class="twitter" aria-label="Twitter de César Sanchez Moreno" target="_blank"><i class="bx bxl-twitter"></i></a>
		</div>
	</section>
	<section class="main-content">
		<Tabs type="modern">
			<Tab titleCard="Biografía" icon='bx bx-book-open' tabTitle="Sobre mí">
				<p>👋 Hola, soy César, desarrollador web fullstack con enfoque en crear soluciones funcionales y accesibles. Me apasiona construir proyectos desde cero, entender cómo funcionan por dentro y trabajar en equipo para llevar ideas a la realidad. Actualmente estoy aprendiendo y perfeccionando mis habilidades en frontend y backend, con interés en tecnologías modernas como Angular, NestJs, SvelteKit y Saas.<br><br>
				Además de programar, disfruto compartir lo que aprendo y formar parte de comunidades donde todos crecemos juntos. Mi objetivo es seguir desarrollándome como profesional y aportar valor en cada proyecto que emprendo.
				</p>
			</Tab>
			<Tab titleCard="Habilidades" icon="bx bx-code" tabTitle="Habilidades">
				<ul>
					<li in:fly={{y: 20, duration: 500}}>React</li>
					<li in:fly={{y: 20, duration: 500, delay: 100}}>Next.js</li>
					<li in:fly={{y: 20, duration: 500, delay: 200}}>Svelte</li>
					<li in:fly={{y: 20, duration: 500, delay: 300}}>Node.js</li>
					<li in:fly={{y: 20, duration: 500, delay: 400}}>TypeScript</li>
					<li in:fly={{y: 20, duration: 500, delay: 500}}>PostgreSQL</li>
				</ul>
			</Tab>
			<Tab titleCard="Educación" icon="fa-solid fa-user-graduate" tabTitle="Educación" disabled={false}>
				<h3>Educación</h3>
				<p>Universidad Tecnológica del Perú<br/>Ingeniería de Sistemas</p>
			</Tab>
		</Tabs>
	</section>
</div>

<style lang="scss">
/* --- Modern Card Styles --- */
.profile-card-modern {
	background: var(--bg-card);
	border-radius: var(--rounded-global);
	box-shadow: 0 2px 16px var(--shadow-card);
	/* padding: 0 1.5rem 2rem 1.5rem; */
	min-width: 340px;
	max-width: 340px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid var(--bg-primary-200);
	position: relative;
}
.card-header-gradient {
	width: 100%;
	height: 90px;
	border-radius: var(--rounded-global) var(--rounded-global) 0 0;
	background: linear-gradient(90deg, var(--primary-500) 0%, var(--primary-300) 100%);
	display: flex;
	align-items: flex-end;
	justify-content: center;
	position: relative;
}
.avatar-modern {
	width: 110px;
	height: 110px;
	border-radius: 50%;
	background: #222;
	border: 5px solid var(--bg-card);
	position: absolute;
	bottom: -55px;
	left: 50%;
	transform: translateX(-50%);
	box-shadow: 0 2px 8px #0002;
}
.profile-card-modern h2 {
	margin-top: 65px;
	margin-bottom: 0.2rem;
	font-size: 1.5rem;
	color: var(--text-primary);
	text-align: center;
}
.profile-card-modern .role {
	color: var(--text-secondary);
	margin-bottom: 0.7rem;
	font-size: 1.1rem;
	text-align: center;
}
.status-row {
	display: flex;
	gap: 0.7rem;
	margin-bottom: 1.2rem;
	justify-content: center;
}
.status-available {
	background: #1a7f37;
	color: #fff;
	border-radius: 1rem;
	padding: 0.2rem 0.9rem;
	font-size: 0.95rem;
	font-weight: 600;
}
.exp-pill {
	background: var(--primary-700);
	color: #fff;
	border-radius: 1rem;
	padding: 0.2rem 0.9rem;
	font-size: 0.95rem;
	font-weight: 600;
}
.info-modern {
	width: 100%;
	margin-bottom: 1.2rem;
	padding-top: 0.5rem;
	border-top: 1px solid var(--bg-primary-200);
}
.info-modern > div {
	display: flex;
	align-items: center;
	gap: 0.7rem;
	margin-bottom: 0.7rem;
	font-size: 1rem;
	color: var(--text-primary);
}
.info-modern .label {
	font-weight: 600;
	color: var(--primary-500);
}
.web-link {
	color: var(--primary-500);
	font-weight: 600;
	cursor: pointer;
}
.skills-section {
	width: 100%;
	margin-bottom: 1.2rem;
}
.skills-label {
	font-size: 0.95rem;
	color: var(--primary-500);
	font-weight: 600;
}
.skills-tags {
	display: flex;
	gap: 0.5rem;
	flex-wrap: wrap;
	margin-top: 0.5rem;
}
.tag {
	background: var(--bg-tag);
	border: 1px solid var(--primary-200);
	border-radius: 10px;
	padding: 0.125rem 0.625rem;
	font-weight: bold;
	color: var(--primary-500);
	font-size: 0.95rem;
}
.languages-section {
	width: 100%;
	margin-bottom: 1.2rem;
}
.lang-row {
	display: flex;
	align-items: center;
	gap: 0.7rem;
	margin-bottom: 0.3rem;
}
.lang-dots {
	display: flex;
	gap: 0.2rem;
}
.dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: var(--primary-200);
	display: inline-block;
}
.dot.active {
	background: var(--primary-500);
}
.social-modern {
	width: 100%;
	display: flex;
	gap: 1rem;
	justify-content: center;
	margin-top: 0.7rem;
}
.social-modern a {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	background: var(--bg-primary-200);
	color: var(--primary-500);
	font-size: 1.3rem;
	transition: background 0.2s, color 0.2s, transform 0.15s;
}
.social-modern a.github:hover {
	background: #23272b;
	color: #ff3e00;
	transform: translateY(-2px) scale(1.04);
}
.social-modern a.linkedin:hover {
	background: #23272b;
	color: #0e76a8;
	transform: translateY(-2px) scale(1.04);
}
.social-modern a.twitter:hover {
	background: #23272b;
	color: #1da1f2;
	transform: translateY(-2px) scale(1.04);
}
/* --- Fin Modern Card Styles --- */
.container {
	display: flex;
	gap: 15px;
	overflow: initial;
}
h2 {
	margin: 0.5rem 0 0.2rem 0;
	font-size: 1.5rem;
}
.role {
	color: #aaa;
	margin-bottom: 1.2rem;
}
.label {
	font-weight: 600;
	color: #fff;
}
.main-content {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
}
</style>