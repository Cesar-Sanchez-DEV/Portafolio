<script lang="ts">
	import { Experiences } from "$lib";
	import Tag from "$lib/components/Tag.svelte";
	import { fade, fly } from "svelte/transition";
	import { theme } from "$lib/stores/theme";
	import { onMount } from 'svelte';
	import CardHover from "$lib/components/CardHover.svelte";

	let user = {
		login: '',
		avatar_url: '',
		name: '',
		bio: '',
		html_url: '',
		followers: 0,
		following: 0,
		public_repos: 0
	};
	let repos = [
		{
			name: '',
			html_url: '',
			languages: [],
			stars: 0
		}
	];

	let isActive = false;
	let techName: string | null = '';

	onMount(async () => {
		const resUser = await fetch('https://api.github.com/users/Cesar-Sanchez-DEV');
		user = await resUser.json();
		
		const res = await fetch('https://api.github.com/users/Cesar-Sanchez-DEV/repos?per_page=100');
		const data = await res.json();

		const ownRepos = data.filter((repo:any) => 
			repo.owner.login === "Cesar-Sanchez-DEV" && !repo.fork
		);

		repos = await Promise.all(
			ownRepos
			.sort((a:any, b:any) => b.stargazers_count - a.stargazers_count)
			.slice(0, 4)
			.map(async (repo:any) => {
				const langRes = await fetch(repo.languages_url);
				const langData = await langRes.json();

				return {
					name: repo.name,
					html_url: repo.html_url,
					languages: Object.keys(langData),
					stars: repo.stargazers_count
				};
			})
		);

		const cardsTech = document.querySelectorAll('.techCard');
		
		cardsTech.forEach(item => {
			item.addEventListener('mousemove', ()=>{
				isActive = true;
				techName = item.getAttribute('data-tech-name');
			});
			item.addEventListener('mouseleave', function() {
				isActive = false;
			});
		});
	});
</script>
<div class="container">
	<CardHover isActive={isActive} txt={techName} />
	<section class="block block1">
		<div class="block_container">
			<div class="projects alt card" in:fly={{delay: 100, y: 20, duration: 500}}>
				<div class="projects_header header">
					<h3>Proyectos recientes</h3>
					<a href="/projects">Ver todos</a>
				</div>
				<div class="projects_content content">
					<div class="item_project">
						<div class="avatar">
							<div class="img">
								<img src="/MekoxFacha.jpg" alt="">
							</div>
							<div class="name">
								<h4>Proyecto 1</h4>
								<a class="text-enlace" href="https://mekoxprueba.com">
									mekoxprueba.com
									<!-- <i class='bx bx-link-external'></i> -->
								</a>
							</div>
							<select bind:value={$theme}>
								<option value="system">System</option>
								<option value="light">Light</option>
								<option value="dark">Dark</option>
							</select>
						</div>
						<div class="desc text-center">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
						</div>
						<div class="category">
							<Tag label="ecommerce"></Tag>
						</div>
					</div>
					<div class="item_project">
						<div class="avatar">
							<div class="img">
								<img src="/MekoxFacha.jpg" alt="">
							</div>
							<div class="name">
								<h4>Proyecto 1</h4>
								<a class="text-enlace" href="https://mekoxprueba.com">
									mekoxprueba.com
									<!-- <i class='bx bx-link-external'></i> -->
								</a>
							</div>
						</div>
						<div class="desc text-center">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
						</div>
						<div class="category">
							<Tag label="ecommerce"></Tag>
						</div>
					</div>
					<div class="item_project">
						<div class="avatar">
							<div class="img">
								<img src="/MekoxFacha.jpg" alt="">
							</div>
							<div class="name">
								<h4>Proyecto 1</h4>
								<a class="text-enlace" href="https://mekoxprueba.com">
									mekoxprueba.com
									<!-- <i class='bx bx-link-external'></i> -->
								</a>
							</div>
						</div>
						<div class="desc text-center">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
						</div>
						<div class="category">
							<Tag label="ecommerce"></Tag>
						</div>
					</div>
				</div>
			</div>
			<div class="about card">
				<div class="info card" in:fly={{delay: 180, y: 20, duration: 500}}>
					<div class="header">
						<h3>Informacion personal</h3>
						<a href="/about">Ver más</a>
					</div>
					<div class="content">
						<div class="edad">
							<div class="icon">
								<i class='bx bx-cake'></i>
							</div>
							<div class="txt">
								<h4>Edad</h4>
								<strong>20 años</strong>
								<small>08/06/2004</small>
							</div>
						</div>
						<div class="carrera">
							<div class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap h-5 w-5"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
							</div>
							<div class="txt">
								<h4>Carrera</h4>
								<strong>Ingeniería de sistemas</strong>
								<small>Universidad Tecnológica del Perú</small>
							</div>
						</div>
						<div class="numero">
							<div class="icon">
								<i class='bx bx-phone'></i>
							</div>
							<div class="txt">
								<h4>Telefono</h4>
								<strong>+51 928 376 511</strong>
							</div>
						</div>
						<div class="idiomas">
							<div class="icon">
								<i class='bx bx-globe'></i>
							</div>
							<div class="txt">
								<h4>Idiomas</h4>
								<div class="tags">
									<Tag label="Español"></Tag>
									<Tag label="Ingles"></Tag>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="stack card" in:fly={{delay: 260, y: 20, duration: 500}}>
					<div class="header">
						<h3>Stack</h3>
						<a href="/about">Ver más</a>
					</div>
					<div class="content">
						<!-- <div class="fondo">
							<div class="circle">
								<div class="tag_circle">
									<Tag label="HTML"></Tag>
								</div>
								<div class="tag_circle">
									<Tag label="CSS"></Tag>
								</div>
								<div class="tag_circle">
									<Tag label="JavaScript"></Tag>
								</div>
								<div class="tag_circle">
									<Tag label="PHP"></Tag>
								</div>
							</div>
							<div class="circle"></div>
							<div class="circle">
								<div class="tag_circle">
									<Tag label="Angular"></Tag>
								</div>
								<div class="tag_circle">
									<Tag label="Svelte"></Tag>
								</div>
								<div class="tag_circle">
									<Tag label="React"></Tag>
								</div>
								<div class="tag_circle">
									<Tag label="Vue"></Tag>
								</div>
							</div>
							<div class="circle"></div>
							<div class="circle"></div>
						</div> -->
						<div class="techCard" data-tech-name="Html">
							<div class="icon html">
								<i class='bx bxl-html5'></i>
							</div>
						</div>
						<div class="techCard" data-tech-name="Css">
							<div class="icon css">
								<i class='bx bxl-css3'></i>
							</div>
						</div>
						<div class="techCard" data-tech-name="JavaScript">
							<div class="icon js">
								<i class='bx bxl-javascript'></i>
							</div>
						</div>
						<div class="techCard" data-tech-name="TypeScript">
							<div class="icon ts">
								<i class='bx bxl-typescript'></i>
							</div>
						</div>
						<div class="techCard" data-tech-name="Angular">
							<div class="icon ng">
								<i class="bx bxl-angular"></i>
							</div>
						</div>
						<div class="techCard" data-tech-name="SvelteKit">
							<div class="icon sv">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.25 122.88"><defs><style>.b{fill:#fff;}</style></defs><title>svelte</title><path class="a" d="M95.73,16.26C84.32-.07,61.78-4.91,45.49,5.47L16.87,23.71A32.83,32.83,0,0,0,2,45.69a35.13,35.13,0,0,0-.55,6.14,34.69,34.69,0,0,0,4,16.06A33,33,0,0,0,.54,80.16a35,35,0,0,0,6,26.46c11.41,16.33,34,21.17,50.24,10.79L85.37,99.17a32.76,32.76,0,0,0,14.83-22,34.08,34.08,0,0,0,.55-6.13A34.72,34.72,0,0,0,96.8,55a33,33,0,0,0,4.91-12.26,36,36,0,0,0,.54-6.13,34.93,34.93,0,0,0-6.52-20.33Zm0,0Z"/><path class="b" d="M42.69,108.16a22.94,22.94,0,0,1-5.72.73A22.7,22.7,0,0,1,18.3,99.11a21,21,0,0,1-3.92-12.23,21.6,21.6,0,0,1,.32-3.68,20.52,20.52,0,0,1,.69-2.67l.54-1.64L17.39,80a37.13,37.13,0,0,0,11.2,5.6l1.06.32-.1,1.06c0,.18,0,.37,0,.55a6.36,6.36,0,0,0,1.18,3.7,6.82,6.82,0,0,0,5.62,3,6.65,6.65,0,0,0,1.72-.22,6.28,6.28,0,0,0,1.76-.77L68.42,74.91a6,6,0,0,0,2.79-5.09A6.35,6.35,0,0,0,70,66.13a6.85,6.85,0,0,0-5.63-2.94,6.65,6.65,0,0,0-1.72.22,6,6,0,0,0-1.75.77L50,71.14a21.06,21.06,0,0,1-5.81,2.55,23.06,23.06,0,0,1-5.72.73A22.73,22.73,0,0,1,19.8,64.65a21.05,21.05,0,0,1-3.92-12.23,21.6,21.6,0,0,1,.32-3.68,19.82,19.82,0,0,1,8.92-13.23L53.74,17.28a21,21,0,0,1,5.81-2.56A23,23,0,0,1,65.27,14,22.74,22.74,0,0,1,84,23.76,21.05,21.05,0,0,1,87.87,36a21.72,21.72,0,0,1-.32,3.69,20.52,20.52,0,0,1-.69,2.67L86.32,44l-1.46-1.07a36.9,36.9,0,0,0-11.2-5.6L72.6,37l.1-1.06c0-.18,0-.37,0-.55a6.42,6.42,0,0,0-1.18-3.71,6.85,6.85,0,0,0-5.62-2.94A6.65,6.65,0,0,0,64.2,29a5.89,5.89,0,0,0-1.76.77L33.82,48a6,6,0,0,0-2.69,4A6.92,6.92,0,0,0,31,53.06a6.35,6.35,0,0,0,1.18,3.69,6.84,6.84,0,0,0,5.62,2.94,6.65,6.65,0,0,0,1.72-.22,6,6,0,0,0,1.76-.77l10.92-7a20.93,20.93,0,0,1,5.81-2.55,23,23,0,0,1,5.72-.73,22.74,22.74,0,0,1,18.68,9.77,21.05,21.05,0,0,1,3.92,12.23A20.64,20.64,0,0,1,86,74.14a19.78,19.78,0,0,1-8.92,13.23L48.51,105.6a21,21,0,0,1-5.82,2.56Zm0,0Z"/></svg>
							</div>
						</div>
						<div class="techCard" data-tech-name="NestJs">
							<div class="icon nest">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M75.4.3c-.9 0-1.8.2-2.6.5 1.7 1.1 2.6 2.6 3.1 4.3 0 .2.1.4.1.6 0 .2.1.4.1.6.1 2.9-.8 3.3-1.4 5-1 2.2-.7 4.6.5 6.5.1.2.2.5.4.7-1.3-8.4 5.7-9.6 7-12.2.1-2.3-1.8-3.8-3.3-4.9C77.8.5 76.6.3 75.4.3zm10.5 1.8c-.1.8 0 .6-.1 1 0 .3 0 .6-.1.9-.1.3-.1.5-.2.8-.1.3-.2.5-.3.8-.1.2-.2.4-.3.7-.1.1-.2.3-.3.4-.1.1-.1.2-.2.3-.2.2-.3.5-.5.7l-.6.6c-.2.2-.4.4-.6.5-.7.5-1.5.9-2.2 1.4-.2.2-.5.3-.7.5-.2.2-.4.3-.6.5l-.6.6c-.2.2-.4.4-.5.7-.2.2-.3.5-.5.7-.1.3-.2.5-.4.8-.1.3-.2.5-.3.8-.1.3-.2.6-.2.8 0 .1 0 .3-.1.4 0 .1 0 .3-.1.4v1.4c0 .3 0 .5.1.8 0 .3.1.5.2.8.1.3.2.5.3.8.1.2.2.3.2.5l-7.6-2.9c-1.3-.4-2.5-.7-3.8-1-.7-.2-1.4-.3-2.1-.5-2-.4-4-.7-6-.9h-.2c-2-.2-3.9-.3-5.9-.3-1.5 0-2.9.1-4.3.2-2 .1-4 .4-6 .7l-1.5.3c-1 .2-2 .4-3 .7-.5.1-1 .3-1.5.4-.5.2-1 .4-1.4.6-.4.2-.7.3-1.1.5-.1 0-.1 0-.2.1-.3.2-.6.3-.9.5-.1 0-.2.1-.2.1-.4.2-.7.4-1 .5-.2.1-.5.2-.7.3-.1.1-.2.1-.3.2-.3.2-.6.3-.9.5-.3.2-.6.3-.8.5-.2.2-.5.3-.7.5 0 0-.1 0-.1.1-.2.1-.4.3-.6.5l-.1.1c-.2.1-.3.3-.5.4-.1 0-.1.1-.2.1-.2.1-.3.3-.5.4 0 .1-.1.1-.1.1l-.6.6-.1.1-.6.6s0 .1-.1.1l-.5.5c-.1.1-.2.1-.2.2l-.6.6c0 .1-.1.1-.1.2l-.8.8-.1.1c-.5.6-1.1 1.1-1.7 1.6-.6.5-1.2 1-1.9 1.5s-1.3.9-2 1.3-1.4.7-2.1 1c-.7.3-1.4.6-2.1.8-1.4.3-2.8.9-4 1 0-.5-.3-.4-.6-.4-.3.1-.6.1-.8.2-.3.1-.5.2-.8.3-.3.1-.5.2-.8.4-.2.2-.5.3-.7.5-.2.2-.5.4-.7.6-.2.2-.5.4-.7.6-.2.2-.4.4-.6.7-.2.3-.4.5-.5.8-.2.2-.3.5-.5.8-.1.3-.3.6-.4.9l-.3.9c-.1.3-.1.5-.2.8v.1c-.1.3-.1.7-.1.9.1-.1.1.1.1.3v.4c0 .2.1.4.1.6.1.2.1.4.2.6.1.2.2.4.4.6.1.2.3.4.4.6.2.2.4.4.6.5.2.2.4.4.6.5.8.7 1 .9 2 1.5.2.1.3.2.5.3h.1v.2c0 .3.1.5.2.8.1.3.2.6.3.8l.3.6c0 .1.1.1.1.2.1.3.3.5.4.7.2.2.3.5.5.7l.6.6.6.6H8c.2.2.4.3.6.5.2.2.5.3.7.4.2.1.5.3.8.4.2.1.4.2.7.2 0 0 .1 0 .1.1.1 0 .3.1.4.1-.1 1.8-.1 3.5.1 4.1.3.7 1.8-1.4 3.2-3.7-.2 2.3-.3 5 0 5.8.4.8 2.3-1.8 4.1-4.6 23.4-5.4 44.8 10.8 47.1 33.7-.4-3.6-4.8-5.6-6.9-5.1-1 2.4-2.7 5.6-5.4 7.5.2-2.2.1-4.4-.3-6.6-.7 3-2.1 5.9-4.1 8.3-3.1.2-6.3-1.3-7.9-3.6-.1-.1-.2-.3-.3-.4-.1-.2-.2-.5-.3-.7-.1-.2-.2-.5-.2-.7v-.7-.5c0-.2.1-.5.2-.7.1-.2.1-.5.2-.7.1-.2.2-.5.4-.7.6-1.6.6-2.9-.5-3.6l-.6-.3c-.1 0-.3-.1-.4-.1-.1 0-.2-.1-.3-.1-.2-.1-.5-.1-.7-.2-.2-.1-.5-.1-.7-.1-.2 0-.5-.1-.7-.1h-.5c-.3 0-.5 0-.7.1-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2-.2.1-.4.2-.7.3l-.6.3c-7.7 5-3.1 16.8 2.1 20.2-2 .4-4 .8-4.6 1.2l-.1.1c1.4.9 2.9 1.6 4.5 2.2 2.1.7 4.4 1.3 5.4 1.6 2.7.6 5.5.8 8.3.6 14.6-1 26.6-12.2 28.8-26.8.1.3.1.6.2.9.1.6.2 1.2.3 1.9.1.3.1.6.1.9v.1c0 .3.1.6.1.9 0 .4.1.7.1 1.1V91.6c0 .3-.1.5-.1.8v.3c0 .3-.1.6-.1 1-.1.3-.1.6-.2.9v.1c-.1.3-.1.6-.2.9v.1c-.1.3-.1.6-.2.9v.1l-.3.9v.1c-.1.3-.2.7-.3 1-.1.3-.2.6-.4 1-.1.3-.2.7-.4 1-.1.3-.3.6-.4 1-.1.3-.3.6-.4.9 0 .1-.1.2-.1.2s0 .1-.1.1c-2.1 4.3-5.3 8.1-9.3 11.1-.3.2-.5.4-.8.6-.1.1-.2.1-.2.2-.2.2-.5.3-.7.5l.1.2c.5-.1.9-.1 1.4-.2.9-.1 1.7-.3 2.6-.5.2 0 .5-.1.7-.2.2 0 .3-.1.5-.1s.5-.1.7-.1c.2-.1.4-.1.6-.2 3.3-.8 6.5-1.9 9.6-3.2-5.3 7.2-12.3 13-20.5 16.8 3.8-.3 7.6-.9 11.3-2 13.3-3.9 24.5-12.9 31.2-25-1.4 7.6-4.4 14.9-8.9 21.3 3.2-2.1 6.1-4.6 8.8-7.3 7.4-7.7 12.3-17.6 13.9-28.1 1.1 5.2 1.5 10.6 1 15.9 23.9-33.3 2-67.8-7.2-76.9 0-.1-.1-.1-.1-.2v0c0 .4 0 .8-.1 1.2-.1.8-.2 1.5-.3 2.2-.2.7-.4 1.5-.6 2.2-.2.7-.5 1.4-.8 2.1-.3.7-.6 1.4-1 2-.4.6-.8 1.3-1.2 1.9-.4.6-.9 1.2-1.4 1.8-.5.6-1 1.1-1.6 1.7-.3.3-.6.6-1 .8-.3.2-.5.4-.8.7-.6.5-1.2.9-1.9 1.3-.6.4-1.3.8-2 1.1l-2.1.9c-.7.3-1.4.5-2.1.7-.7.2-1.5.4-2.2.5-.8.1-1.5.2-2.2.3-.5 0-1.1.1-1.6.1-.8 0-1.5-.1-2.2-.1-.8-.1-1.5-.2-2.2-.3-.8-.1-1.5-.3-2.2-.6.7-.1 1.5-.1 2.2-.3.8-.1 1.5-.3 2.2-.5.7-.2 1.5-.4 2.1-.7l2.1-.9c.7-.3 1.3-.7 2-1.1.6-.4 1.3-.9 1.9-1.3.6-.5 1.2-1 1.7-1.5.6-.5 1.1-1.1 1.6-1.6.5-.6 1-1.2 1.4-1.8.1-.1.1-.2.2-.3.3-.5.7-1.1 1-1.6.4-.7.7-1.3 1-2 .3-.7.6-1.4.8-2.1l.6-2.1c.1-.8.3-1.5.3-2.2.1-.8.1-1.5.1-2.2 0-.5 0-1.1-.1-1.6-.1-.8-.2-1.5-.3-2.2-.1-.8-.3-1.5-.5-2.2-.2-.7-.5-1.4-.7-2.1-.3-.7-.6-1.4-.9-2-.4-.7-.7-1.3-1.1-2-.4-.6-.9-1.2-1.3-1.8-.5-.6-1-1.1-1.5-1.7-.3-.3-.6-.6-.9-.8-1.5-1.2-3-2.2-4.6-3.2-.2-.1-.4-.2-.7-.3-1.3-1.1-2.3-1.4-3.3-1.8z"/></svg>
							</div>
						</div>
						<div class="techCard" data-tech-name="PostgreSql">
							<div class="icon pg">
								<i class='bx bxl-postgresql'></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="block block2">
		<div class="works card" in:fly={{delay: 340, y: 20, duration: 500}}>
			<div class="works_header header">
				<h3>Trabajos recientes</h3>
				<a href="/">Ver todos</a>
			</div>
			<div class="works_content">
				<ul class="work_list">
					<li class="work_card add text-center">
						+
					</li>
					{#each Experiences as item}
						<li class="work_card" class:active={item.activo==true}>
							<div class="work_card_info text-center">
								<div class="logo">
									<img src={item.logo} alt="">
								</div>
								<div class="info">
									<h3>{item.empresa}</h3>
									<strong>{item.cargo}</strong><br>
									<small><i class='bx bx-map'></i> {item.ubicacion}</small><br>
									<small>
										<i class='bx bx-calendar'></i>
										{item.inicio} - {item.activo ? 'Actualidad' : item.fin}
									</small>
								</div>
							</div>
							<div class="work_card_tech">
								{#each item.lenguajes as lenguaje}
									<Tag label={lenguaje.nombre}></Tag>
								{/each}
							</div>
						</li>
					{/each}
					<div class="directionals">
						<span class="active">

						</span>
						<span>

						</span>
					</div>
				</ul>
			</div>
		</div>
		<div class="github alt card" in:fly={{delay: 420, y: 20, duration: 500}}>
			<div class="header">
				<h3>Github</h3>
			</div>
			<div class="container">
				<div class="profile">
					<div class="user text-center">
						<img src={user.avatar_url} alt="Cesar Sanchez Moreno" />
						<h4>{user.name}</h4>
						<strong class="text-sm">@{user.login}</strong>
						<p class="bio">{user.bio}</p>
						<img style="width: 100%; height: 20px; object-fit: cover;" src="https://camo.githubusercontent.com/6bd89764bea7e14fe131c8570cb173c8727186d9830486cd540d1ef3e794de3d/68747470733a2f2f726561646d652d747970696e672d7376672e6865726f6b756170702e636f6d2f3f666f6e743d54696d652b4e65772b526f6d616e2673697a653d32352663656e7465723d74727565267643656e7465723d747275652677696474683d373030266865696768743d3530266475726174696f6e3d32383030266c696e65733d53797374656d732b656e67696e656572696e672b73747564656e74f09f939d3b2b46726f6e742d656e642b646576656c6f706572f09f91a8e2808df09f92bb3b2b4261636b2d656e642b646576656c6f706572f09f91a8e2808df09f92bb3b26636f6c6f723d663530" alt="">
						<a class="btn btn_github" href={user.html_url} target="_blank">Seguir</a>
					</div>
					<div class="data text-center">
						<div class="repos">
							<h4>Repositorios</h4>
							<p>{user.public_repos}</p>
						</div>
						<div class="followers">
							<h4>Seguidores</h4>
							<p>{user.followers}</p>
						</div>
						<div class="following">
							<h4>Siguiendo</h4>
							<p>{user.following}</p>
						</div>
					</div>
				</div>
				<div class="repositories">
					{#each repos as repo}
						<div class="repo">
							<a class="text-github" href={repo.html_url} target="_blank">{repo.name}</a>
							{#if repo.languages.length > 0}
								<div class="repo_languages">
									<p style="width: max-content;" class="text-xs">{repo.languages[0]}</p>
										{#if repo.stars}
											<p style="width: max-content;" class="text-xs"><i class='bx bx-star' ></i> {repo.stars}</p>
										{/if}
								</div>
							{/if}
						</div>
					{/each}
					<a class="text-github text-center self-center" href={user.html_url} target="_blank"><i class='bx bx-git-branch'></i> Ver todos los repositorios</a>
				</div>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	.container{
		display: flex;
		overflow: initial;
	}
	.block{
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 0;
		>div{
			display: inherit;
			flex-direction: inherit;
			gap: inherit;
			overflow: auto;
			scrollbar-width: thin;
			padding-right: 15px;
			flex: 1;
		}
		&.block1{
			width: 55%;
			flex: initial;
		}
		.card{
			background-color: var(--bg-card);
			border-radius: var(--rounded-global);
			border: 1px solid var(--bg-primary-200);
			flex: 1;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			&:hover{
				box-shadow: 0 0 25px light-dark(#22222220, #2227);
			}
			>.header{
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid var(--bg-line-div);
				padding: 15px;
				h3{
					color: #ff3e00;
				}
				a{
					color: #ff3e00;
					cursor: pointer;
					&:hover{
						text-decoration: underline;
					}
				}
			}
			>.content{
				padding: 15px;
				overflow: auto;
				display: flex;
				height: max-content;
			}
			&.about{
				background-color: transparent;
				// flex-direction: row;
				border: none;
				padding: 0;
				gap: 15px;
				height: auto;
				box-shadow: none;
				overflow: visible;
			}
			&.alt{
				min-height: 51%;
				flex: initial;
			}
		}
	}
	.projects{
		.projects_content{
			width: 100%;
			display: flex;
			flex-direction: column;
			height: 0;
			flex: 1;
			padding: 0 !important;
			.item_project{
				display: flex;
				gap: 10px;
				height: max-content;
				justify-content: space-between;
				padding: 0 15px;
				&:has(~div){
						height: 100%;
						flex: 1;
						border-bottom: 1px solid var(--bg-line-div);
						+div{
							flex: 1;
							height: 100%;
						}
				}
				>div{
					align-content: center;
				}
				.avatar{
					display: flex;
					align-items: center;
					gap: 10px;
					.img{
						width: 40px;
						height: 40px;
					}
				}
				.desc{
					padding: 0 5px;
					hyphens: auto;
					text-wrap: pretty;
				}
			}
			img{
				height: 40px;
				border-radius: 50%;
			}
		}
	}
	.about{
		>.card{
			flex: initial;
			height: max-content;
		}
		.info{
			display: flex;
			flex-direction: column;
			.content{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 10px;
				>div{
					display: flex;
					align-items: center;
					gap: 10px;
					.icon{
						width: 40px;
						height: 40px;
						display: flex;
						align-items: center;
						justify-content: center;
						background-color: light-dark(var(--bg-primary-100), var(--bg-primary-200));
						border-radius: var(--rounded-global);
						>*{
							color: var(--primary-500);
							stroke: var(--primary-500);
						}
					}
					.txt{
						>*{
							display: block;
						}
						.tags{
							display: flex;
							gap: 5px;
							flex-wrap: wrap;
						}
						h4{
							color: var(--primary-500);
							font-size: 14px;
							margin-bottom: 0;
							
						}
						strong{
							font-size: 20px;
							font-weight: 600;
						}
						small{
							color: var(--text-tertiary);
						}
					}
				}
			}
		}
		.stack{
			.content{
				position: relative;
				overflow: hidden;
				flex-wrap: wrap;
				justify-content: space-between;
				gap: 15px;
				.techCard{
					display: flex;
					justify-content: center;
					align-items: center;
					width: calc(100% / 4 - 12px);
					border: 1px solid var(--bg-primary-200);
					border-radius: var(--rounded-global);
					background-color: var(--bg-primary-150);
					padding: 10px;
					cursor: pointer;
					.icon{
						padding: 10px;
						width: max-content;
						display: flex;
						border-radius: var(--rounded-global);
						i{
							font-size: 30px;
						}
						svg{
							fill: var(--text-primary);
							height: 30px;
						}
					}
					.sv{
						svg{
							.a{
								fill: light-dark(var(--text-primary), var(--text-tertiary));
							}
						}
					}
					&:hover{
						transform: translateY(-5px) scale(1.02);
						border-color: var(--primary-500);
						box-shadow: 0 5px 5px var(--primary-500-hover);
						.html{
							background-color: #e34c2633;
							i{
								color: #E34C26;
							}
						}
						.css{
							background-color: #1a62b033;
							i{
								color: #1a62b0;
							}
						}
						.js{
							background-color: #f7df1e33;
							i{
								color: #f7df1e;
							}
						}
						.ts{
							background-color: #3178C633;
							i{
								color: #3178C6;
							}
						}
						.ng{
							background-color: #FC044C33;
							i{
								color: #FC044C;
							}
						}
						.sv{
							background-color: #ff3E0033;
							svg{
								.a{
									fill: #ff3E00;
								}
								.b{
									fill: #fff;
								}
							}
						}
						.nest{
							background-color: #DF234F33;
							svg{
								fill: #DF234F;
							}
						}
						.pg{
							background-color: #5190C433;
							i{
								color: #5190C4
							}
						}
					}
				}
				// .fondo{
				// 	width: 100%;
				// 	height: 100%;
				// 	position: absolute;
				// 	display: flex;
				// 	justify-content: center;
				// 	background-color: var(--bg-primary-50);
				// 	.circle{
				// 		background-color: var(--bg-card);
				// 		border: 1px solid var(--bg-primary-200);
				// 		border-radius: 50%;
				// 		position: absolute;
				// 		bottom: 0;
				// 		transform: translateY(75%);
				// 		.tag_circle{
				// 			animation: tag 4s infinite linear;
				// 			position: absolute;
				// 			transform: translateX(-50%);
				// 			bottom: 0;
				// 			left: 0;
				// 			&:nth-child(2){
				// 				animation-delay: 1s;
				// 			}
				// 			&:nth-child(3){
				// 				animation-delay: 2s;
				// 			}
				// 			&:nth-child(4){
				// 				animation-delay: 3s;
				// 			}
				// 		}
				// 		@keyframes tag{
				// 			0%{
				// 				bottom: 50%;
				// 				left: 0;
				// 			}
				// 			25%{
				// 				bottom: 75%;
				// 				left: 12.5%;
				// 			}
				// 			32%{
				// 				bottom: 85%;
				// 				left: 20%;
				// 			}
				// 			50%{
				// 				bottom: 98%;
				// 				left: 50%;
				// 			}
				// 			68%{
				// 				bottom: 85%;
				// 				left: 80%;
				// 			}
				// 			75%{
				// 				bottom: 75%;
				// 				left: 87.5%;
				// 			}
				// 			100%{
				// 				bottom: 40%;
				// 				left: 100%;
				// 			}
				// 		}
				// 		&:nth-child(1){
				// 			width: 200px;
				// 			height: 200px;
				// 			z-index: 5;
				// 			display: flex;
				// 		}
				// 		&:nth-child(2){
				// 			width: 325px;
				// 			height: 300px;
				// 			background-color: var(--bg-primary-50);
				// 			bottom: 50px;
				// 			transform: translateY(calc(75% - 0px));
				// 			z-index: 4;
				// 		}
				// 		&:nth-child(3){
				// 			width: 425px;
				// 			height: 400px;
				// 			bottom: 100px;
				// 			transform: translateY(75%);
				// 			z-index: 3;
				// 			.tag_circle{
				// 				animation: tag 9.5s infinite reverse linear;
				// 				&:nth-child(1){
				// 					animation-delay: 1s;
				// 				}
				// 				&:nth-child(2){
				// 					animation-delay: 3.5s;
				// 				}
				// 				&:nth-child(3){
				// 					animation-delay: 5.5s;
				// 				}
				// 				&:nth-child(4){
				// 					animation-delay: 7.5s;
				// 				}
				// 			}
				// 		}
				// 		&:nth-child(4){
				// 			width: 500px;
				// 			height: 500px;
				// 			bottom: 150px;
				// 			background-color: var(--bg-primary-50);
				// 			z-index: 2;
				// 		}
				// 		&:nth-child(5){
				// 			width: 600px;
				// 			height: 600px;
				// 			bottom: 200px;
				// 			z-index: 1;
				// 		}
				// 	}
				// }
			}
		}
	}
	.works{
		.works_content{
			width: 100%;
			height: 100%;
			padding: 0 15px 15px 15px;
			overflow: hidden;
			ul{
				display: flex;
				flex-direction: row-reverse;
				height: 100%;
				position: relative;
				padding: 0 0 15px 0;
				gap: 15px;
				overflow: auto;
				scrollbar-width: none;
				.work_card{
					flex: 1;
					height: 100%;
					min-width: calc(100% / 2.2 - 35px);
					border-radius: var(--rounded-global);
					border: 1px solid var(--bg-primary-200);
					box-shadow: 0 0 8px var(--shadow-card);
					padding: 15px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					overflow: hidden;
					scrollbar-width: thin;
					&.active{
						background-color: var(--primary-500);
						border: none;
						box-shadow: none;
					}
					&.add{
						align-content: center;
						padding: 0;
						min-width: 40px;
						flex: initial;
						display: initial;
						background: var(--bg-card);
						border: 1px dashed light-dark(#222, #ccc);
						cursor: pointer;
						font-size: 20px;
						&:hover{
							min-width: 100px;
							background-color: var(--primary-500-hover);
							border-color: var(--primary-500);
						}
					}
					.work_card_info{
						display: flex;
						flex-direction: column;
						align-items: center;
						gap: 10px;
						.logo{
							width: 100px;
							height: 80px;
							img{
								width: auto;
								height: 100%;
								object-fit: cover;
								border-radius: var(--rounded-global);
							}
						}
						.info{
							h3{
								color: var(--primary-500);
							}
							i{
								color: var(--primary-500);
							}
						}
					}
					.work_card_tech{
						flex: 1;
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						align-items: center;
						gap: 10px;
					}
				}
				.directionals{
					display: flex;
					align-items: center;
					gap: 10px;
					bottom: 0;
					right: 50%;
					transform: translateX(50%);
					position: absolute;
					span{
						width: 5px;
						height: 5px;
						cursor: pointer;
						background-color: var(--bg-primary-200);
						border-radius: var(--rounded-global);
						&.active{
							height: 12px;
							background-color: var(--primary-500);
							
						}
					}
				}
			}
		}
	}
	.github{
		background-color: var(--bg-github) !important;
		border: 1px solid var(--border-github);
		.container{
			display: flex;
			padding: 5px 15px;
			.profile{
				flex: 1;
				.user{
					display: flex;
					flex-direction: column;
					align-items: center;
					hyphens: auto;
					// text-wrap: pretty;
					justify-content: center;
					gap: 5px;
					flex: 1;
					img{
						width: 100px;
						height: 100px;
						border-radius: 50%;
					}
					.btn_github{
						width: 100%;
						background-color: #238636;
						color: #fff;
						padding: 10px 20px;
						border-radius: calc(.5rem - 2px);
						text-decoration: none;
						font-weight: bold;
						&:hover{
							background-color: #2ea043;
						}
					}
				}
				.data{
					display: flex;
					justify-content: space-between;
					align-items: center;
					>div{
						padding: 5px;
						h4{
							font-size: 14px;
							margin-bottom: 0;
						}
						p{
							font-size: 20px;
							font-weight: 600;
						}
					}
				}
			}
			.repositories{
				display: flex;
				flex-direction: column;
				gap: 10px;
				overflow: hidden;
				height: 100%;
				padding: 15px;
				width: 50%;
				.repo{
					background-color: var(--bg-card-github);
					border-radius: .5rem;
					border: 1px solid var(--border-github);
					display: flex;
					flex-direction: column;
					gap: 5px;
					overflow: hidden;
					padding: 10px;
					transition: all .3s ease-in-out;
					.repo_languages{
						display: flex;
						gap: 10px;
					}
				}
			}
		}
	}
</style>