import React from 'react';
import styles from './HeroSection.module.css';
import Link from 'next/link';

let HeroSectionData1:string = 'Cristina Vianeth Saiz'
let HeroSectionData2:string = 'Data Analyst'

export default function HeroSection(){
    return(
        <>
        <section className={`${styles.hero} section`} id="home">
            <div className={`container ${styles.hero__container}`}>
                <div className={styles.hero__content}>
                    <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
                    <h1 className={styles.hero__title}>{HeroSectionData1}</h1>
                    <h2 className={styles.hero__subtitle}>
                        <span className={styles.highlight}>{HeroSectionData2}</span> en Crecimiento
                    </h2>
                    <p className={styles.hero__description}>
                        Estudiante de Matematicas Aplicadas y Computación. 
                        Me apasiona entender como funcionan las cosas y encontrar patrones
                        donde otros solo ven numeros.
                        </p>
                    <p className={styles.hero__description}> 
                        Soy una persona curiosa, analitica y empatica; disfruto usar las Matematicas y la 
                        programación para analizar problemas y buscar soluciones.
                        Cuando combinas logica, creatividad y tecnologia puedes transformar datos e ideas
                        en oportunidades
                    </p>
         
                    <div className={styles.hero__buttons}>
                        <Link href="#projects" className={`btn btn--outline`}>
                            <i className={`fas fa-envelope`}></i> Ver mis proyectos
                        </Link>
                
                       
                        <Link href="#contact" className={`btn btn--outline`}>
                            <i className={`fas fa-envelope`}></i> Contáctame
                        </Link>
                    </div>
                </div>
                
                <div className={styles.hero__image}>
                    <div className={styles.hero__blob}>
                        <div className={styles.hero__avatar}>
                            <i className={`fas fa-user-astronaut`}></i>
                        </div>
                    </div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--1']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--2']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--3']}`}></div>
                </div>
            </div>
            
            <div className={styles.hero__scroll}>
                <Link href="#interests" className={`hero__scroll-link`}>
                    <span>Scroll</span>
                    <i className={`fas fa-chevron-down`}></i>
                </Link>
            </div>
        </section>
        </>
    );
}