import type { Experience } from "$lib/types/Experience";

export const Experiences: Experience[] = [
    {
        id: 1,
        cargo: 'Desarrollador fullstack',
        empresa: 'Comunidad SPLL',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMsruty_F9h5JeLl7KyMGj4eggx4hGv0JMw&s',
        inicio: 'Enero 2025',
        activo: true,
        ubicacion: 'San Pedro de Lloc',
        descripcion: 'Desarrollo de aplicaciones',
        lenguajes: [
            {nombre: 'Angular'},
            {nombre: 'NestJS'},
            {nombre: 'PostgreSQL'}
        ]
    },
    {
        id: 2,
        cargo: 'Desarrollador frontend',
        empresa: 'Hass Perú SAC',
        logo: '/hassPeru.jpeg',
        inicio: 'Octubre 2024',
        fin: 'Enero 2025',
        ubicacion: 'Trujillo, Perú',
        descripcion: 'Prueba de data',
        lenguajes: [
            {nombre: 'Angular'},
            {nombre: 'Java'},
            {nombre: 'Sql'}
        ]
    },
    {
        id: 3,
        cargo: 'Desarrollador frontend',
        empresa: 'SEOPerú',
        logo: '',
        inicio: 'Enero 2024',
        fin: 'Setiembre 2025',
        ubicacion: 'Lima, Perú',
        descripcion: 'Desarrollo de paginas web administrables',
        lenguajes: [
            {nombre: 'Wordpress'},
            {nombre: 'PHP'},
            {nombre: 'MySQL'}
        ]
    }
]