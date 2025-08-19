import React from 'react'
export default function FeatureRow(){
  return (
    <section className="feature-row container">
      <div className="row">
        <div className="feature">
          <img src="/img/features/pathway.jpg" alt="My Pathway" />
          <div>
            <h3>My Pathway</h3>
            <p>My Pathway está diseñado para resaltar tus logros, realizar un seguimiento de tu progreso y ayudarte a buscar los trabajos más demandados de la actualidad.</p>
          </div>
        </div>
        <div className="feature">
          <img src="/img/features/certified.jpg" alt="CERTIFIED Conference" />
          <div>
            <h3>CERTIFIED Conference</h3>
            <p>CERTIFIED es la principal conferencia educativa de Certiport dedicada a explorar el potencial puro de la certificación en el aula.</p>
          </div>
        </div>
        <div className="feature">
          <img src="/img/features/world.jpg" alt="World Championship" />
          <div>
            <h3>Competiciones Mundiales</h3>
            <p>Obtén más información sobre las competiciones del Campeonato Mundial de Profesionales Certificados por Adobe y los Campeonatos Mundiales de Especialistas de Microsoft Office de Certiport.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
