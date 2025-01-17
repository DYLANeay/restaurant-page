import restaurantImg from "./resto.jpg";

export function homeContent() {
    const content = document.getElementById('content');
  
    const container = document.createElement('div');
    container.id = 'container';
  
    const img = document.createElement('img');
    img.src = restaurantImg;
    img.alt = 'restaurant img';
  
    const header = document.createElement('h1');
    header.textContent = 'Welcome to Master Poulet';
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et, explicabo natus temporibus maiores alias delectus nobis. Optio doloremque impedit pariatur, possimus beatae error eos facilis! Dolores, voluptatum magnam? Cumque? Soluta natus distinctio asperiores deserunt rerum tempora sunt quas dignissimos exercitationem in, hic iusto aspernatur! Autem sunt repellendus rerum necessitatibus totam sint laudantium commodi ex enim praesentium, vel quasi quisquam.';
  
    container.appendChild(img);
    container.appendChild(header);
    container.appendChild(paragraph);
  
    content.appendChild(container);
  }
  
  