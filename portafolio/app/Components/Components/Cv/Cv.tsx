import React from 'react';
import styles from './Cv.module.css';
import Link from 'next/link';

export default function Cv(){
    return(
        <section className={`${styles.cv} section`} id="cv">
            <div className="container">
                <div className={styles.cv__content}>

                    <div className={styles.cv__info}>
                        <span className="section__subtitle">Conoce mi trayectoria</span>
                        <h2 className="section__title">Mi Currículum</h2>

                        <p className={styles.cv__description}>
                            Descarga mi CV para conocer mi formación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>
                        
                        <div className={styles.cv__buttons}>
                            <a 
                                href="https://vianethsaiz-wq.github.io/lab05_CristinaVianethSaizPerez/" 
                                className="btn btn--primary btn--large"
                            >
                                <i className="fas fa-download"></i> Descargar CV
                            </a>

                            <a href="#" className="btn btn--secondary btn--large">
                                <i className="fas fa-eye"></i> Ver CV Digital
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.cv__social}>
                        {/* 🔴 CORRECCIÓN IMPORTANTE */}
                        <h3 className={styles['cv__social-title']}>Conectemos</h3>

                        {/* 🔴 CORRECCIÓN IMPORTANTE */}
                        <div className={styles['cv__social-links']}>

                            <a 
                                href="https://www.linkedin.com/in/cristina-vianeth-saiz-perez-3143333b1" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.social__card}
                            >
                                <div className={`${styles.social__icon} ${styles['social__icon--linkedin']}`}>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>

                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>LinkedIn</span>
                                    <span className={styles.social__user}>@cristina-vianeth-saiz-perez</span>
                                </div>

                                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                            </a>

                            <a 
                                href="https://github.com/vianethsaiz-wq" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.social__card}
                            >
                                <div className={`${styles.social__icon} ${styles['social__icon--github']}`}>
                                    <i className="fab fa-github"></i>
                                </div>

                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>GitHub</span>
                                    <span className={styles.social__user}>@vianethsaiz-wq</span>
                                </div>

                                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                            </a>

                            <a 
                                href="mailto:cristinavianethsaizperez@gmail.com" 
                                className={styles.social__card}
                            >
                                <div className={`${styles.social__icon} ${styles['social__icon--email']}`}>
                                    <i className="fas fa-envelope"></i>
                                </div>

                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>Email</span>
                                    <span className={styles.social__user}>cristinavianethsaizperez@gmail.com</span>
                                </div>

                                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}