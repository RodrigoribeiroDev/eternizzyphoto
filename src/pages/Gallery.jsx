import React, { useState } from 'react';
import '../pages/CSS/Gallery.css';

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = {
    'Flavia Acampora': [
       '/flaviaacampora/flaviaacampora (1).jpg',
       '/flaviaacampora/flaviaacampora (2).jpg',
       '/flaviaacampora/flaviaacampora (3).jpg',
       '/flaviaacampora/flaviaacampora (4).jpg',
       '/flaviaacampora/flaviaacampora (5).jpg',
       '/flaviaacampora/flaviaacampora (6).jpg',
       '/flaviaacampora/flaviaacampora (7).jpg',
       '/flaviaacampora/flaviaacampora (8).jpg',
       '/flaviaacampora/flaviaacampora (9).jpg',
       '/flaviaacampora/flaviaacampora (10).jpg',
       '/flaviaacampora/flaviaacampora (11).jpg',
       '/flaviaacampora/flaviaacampora (12).jpg',
       '/flaviaacampora/flaviaacampora (13).jpg',
       '/flaviaacampora/flaviaacampora (14).jpg',
       '/flaviaacampora/flaviaacampora (15).jpg',
       '/flaviaacampora/flaviaacampora (16).jpg',

    ],

    'Alisson Ribeiro': [
      '/alissonribeiro/alissonribeiro (1).jpg',
      '/alissonribeiro/alissonribeiro (1).png',
      '/alissonribeiro/alissonribeiro (2).png',
      '/alissonribeiro/alissonribeiro (2).jpg',
      '/alissonribeiro/alissonribeiro (3).jpg',
     
    
    ], 
    'Marcelo Bispo': [
      '/marcelobispo/marcelobispo (1).jpg',
      '/marcelobispo/marcelobispo (2).jpg',
      '/marcelobispo/marcelobispo (1).png',
      '/marcelobispo/marcelobispo (2).png',
      '/marcelobispo/marcelobispo (3).png',
      '/marcelobispo/marcelobispo (4).png',
      '/marcelobispo/marcelobispo (5).png',
      '/marcelobispo/marcelobispo (6)png',
      '/marcelobispo/marcelobispo (7).png',
      '/marcelobispo/marcelobispo (9).png',
      '/marcelobispo/marcelobispo (10).png',
      '/marcelobispo/marcelobispo (11).png',
      '/marcelobispo/marcelobispo (12).png',
      '/marcelobispo/marcelobispo (13).png',
      '/marcelobispo/marcelobispo (14).png',
      '/marcelobispo/marcelobispo (15).png',
      '/marcelobispo/marcelobispo (16).png',
      '/marcelobispo/marcelobispo (17).png',
      '/marcelobispo/marcelobispo (18).png',
      '/marcelobispo/marcelobispo (19).png',
    
    ], 
    'Erizete Souza' : [
      '/erizetesouza/erizetesouza (1).jpg',
      '/erizetesouza/erizetesouza (2).jpg',
      '/erizetesouza/erizetesouza (3).jpg',
      '/erizetesouza/erizetesouza (4).jpg',
      '/erizetesouza/erizetesouza (5).jpg',
      '/erizetesouza/erizetesouza (6).jpg',
      '/erizetesouza/erizetesouza (7).jpg',
      '/erizetesouza/erizetesouza (8).jpg',
      '/erizetesouza/erizetesouza (9).jpg',
      '/erizetesouza/erizetesouza (10).jpg',
      '/erizetesouza/erizetesouza (11).jpg',
      '/erizetesouza/erizetesouza (12).jpg',
    ],
    'Ximena Elizabeth': [
      '/ximenaelizabeth/ximenaelizabeth (1).jpg',
      '/ximenaelizabeth/ximenaelizabeth (2).jpg',
      '/ximenaelizabeth/ximenaelizabeth (3).jpg',
      '/ximenaelizabeth/ximenaelizabeth (4).jpg',
      '/ximenaelizabeth/ximenaelizabeth (5).jpg',
      '/ximenaelizabeth/ximenaelizabeth (6).jpg',
      '/ximenaelizabeth/ximenaelizabeth (7).jpg',
      '/ximenaelizabeth/ximenaelizabeth (8).jpg',
    ],
    'Adenilce Martins' : [
      '/adenilcemartins/adenilcemartins (1).jpg',
      '/adenilcemartins/adenilcemartins (2).jpg',
      '/adenilcemartins/adenilcemartins (3).jpg',
      '/adenilcemartins/adenilcemartins (4).jpg',
      '/adenilcemartins/adenilcemartins (5).jpg',
      '/adenilcemartins/adenilcemartins (6).jpg',
      '/adenilcemartins/adenilcemartins (7).jpg',
      '/adenilcemartins/adenilcemartins (8).jpg',
      '/adenilcemartins/adenilcemartins (9).jpg',
      '/adenilcemartins/adenilcemartins (10).jpg',
      '/adenilcemartins/adenilcemartins (11).jpg',
      '/adenilcemartins/adenilcemartins (12).jpg',
    ],
    'Luiz Monteiro': [ 
      '/luizmonteiro/luizmonteiro (1).jpg',
      '/luizmonteiro/luizmonteiro (2).jpg',
      '/luizmonteiro/luizmonteiro (3).jpg',
      '/luizmonteiro/luizmonteiro (4).jpg',
      '/luizmonteiro/luizmonteiro (5).jpg',
      '/luizmonteiro/luizmonteiro (6).jpg',
      '/luizmonteiro/luizmonteiro (7).jpg',
      '/luizmonteiro/luizmonteiro (8).jpg',
      '/luizmonteiro/luizmonteiro (9).jpg',
      '/luizmonteiro/luizmonteiro (10).jpg',
      '/luizmonteiro/luizmonteiro (11).jpg',
      '/luizmonteiro/luizmonteiro (12).jpg',
    ],
    'Willian Santos':[
      '/williansantos/williansantos (1).png',
      '/williansantos/williansantos (2).png',
      '/williansantos/williansantos (3).png',
      '/williansantos/williansantos (4).png',
      '/williansantos/williansantos (5).png',
      '/williansantos/williansantos (6).png',
      '/williansantos/williansantos (7).png',
      '/williansantos/williansantos (8).png',
      '/williansantos/williansantos (9).png',
      '/williansantos/williansantos (10).png',
      '/williansantos/williansantos (11).png',
      '/williansantos/williansantos (12).png',
      '/williansantos/williansantos (13).png',
      '/williansantos/williansantos (14).png',
    ],
    'Adriana Laranjeiras': [
      '/adrianalaranjeiras/adrianalaranjeiras (1).jpg',
      '/adrianalaranjeiras/adrianalaranjeiras (2).jpg',
      '/adrianalaranjeiras/adrianalaranjeiras (3).jpg',
      '/adrianalaranjeiras/adrianalaranjeiras (4).jpg',
      '/adrianalaranjeiras/adrianalaranjeiras (5).jpg',
      '/adrianalaranjeiras/adrianalaranjeiras (6).jpg',
      '/adrianalaranjeiras/adrianalaranjeiras (7).jpg',
      '/adrianalaranjeiras/adrianalaranjeiras (8).jpg',
      '/adrianalaranjeiras/adrianalaranjeiras (9).jpg',
      '/adrianalaranjeiras/adrianalaranjeiras (10).jpg',
      '/adrianalaranjeiras/adrianalaranjeiras (11).jpg',
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
