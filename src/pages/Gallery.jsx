import React, { useState } from 'react';
import '../pages/CSS/Gallery.css';

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = {
    'Ângela Maria': [
      '/Extremo - Maria do Carmo - Privativo Karla (10).jpg',
      '/Extremo - Maria do Carmo - Privativo Karla (15).jpg',
      '/Extremo - Maria do Carmo - Privativo Karla (17).jpg',
      '/Extremo - Maria do Carmo - Privativo Karla (34).jpg',
      '/Extremo - Maria do Carmo - Privativo Karla (39).jpg',
      '/Extremo - Maria do Carmo - Privativo Karla (48).jpg',
      '/Extremo - Maria do Carmo - Privativo Karla (61).jpg',
      '/Extremo - Maria do Carmo - Privativo Karla (63).jpg',
    ],

    'Celina Oliveira': [
      '/Costa do Conde - Theilla - Privativo Thaline (17).jpg',
      '/Costa do Conde - Theilla - Privativo Thaline (21).jpg',
      '/Costa do Conde - Theilla - Privativo Thaline (23).jpg',
      '/Costa do Conde - Theilla - Privativo Thaline (27).jpg',
      '/Costa do Conde - Theilla - Privativo Thaline (59).jpg',
      '/Costa do Conde - Theilla - Privativo Thaline (190).jpg',
    
    ], 
    'Tania Ghazi': [
      '/Areia Vermelha - Juan Carlos - Leandra (40).jpg',
      '/Areia Vermelha - Juan Carlos - Leandra (22).jpg',
      '/Areia Vermelha - Juan Carlos - Leandra (38).jpg',
      '/Costa do Costa - Goshta - Natalia (74).jpg',
      '/Costa do Costa - Goshta - Natalia (575).jpg',
      '/Litoral Norte - Juan Carlos - Michelle (124).jpg',

    
    ], 

  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Nossa Galeria</h1>

      {Object.entries(galleryData).map(([cliente, fotos]) => (
        <div key={cliente} className="gallery-section">
          <h2 className="client-title" onClick={() => setSelectedAlbum(cliente)}>
            {cliente}
          </h2>

          {/* Se o álbum NÃO estiver selecionado, mostra apenas a capa */}
          {selectedAlbum !== cliente && (
            <div className="album-cover" onClick={() => setSelectedAlbum(cliente)}>
              <img
                src={fotos[0]} // primeira imagem como capa
                alt={`Capa de ${cliente}`}
                className="cover-image"
              />
            </div>
          )}

          {selectedAlbum === cliente && (
            <div className="gallery-grid">
              <button className="back-button" onClick={() => setSelectedAlbum(null)}>Voltar</button>
              {fotos.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Foto de ${cliente} ${index + 1}`}
                  className="gallery-image"
                  onClick={() => setSelectedImage(src)}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Zoom" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
