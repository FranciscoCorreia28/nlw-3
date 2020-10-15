import React from 'react';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import mapMarker from '../assets/images/map-marker.svg'
import '../assets/styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return (

        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Luanda</strong>
                    <span>Camama</span>
                </footer>
            </aside>

            <div></div>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>

    );
}

export default OrphanagesMap;