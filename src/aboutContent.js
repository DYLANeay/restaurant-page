export function aboutContent() {

    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.id = 'container';
  
    const descr = document.createElement('h2');
    descr.textContent = 'Retrouvez-nous sur place!';
  
    const div = document.createElement('div');
    div.style.width = '100%';
  
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '600';
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';
    iframe.marginHeight = '0';
    iframe.marginWidth = '0';
    iframe.src = 'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=21%20Rue%20Marx%20Dormoy,%2075018%20Paris,%20France&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed';
    div.appendChild(iframe);
  
    container.appendChild(descr);
    container.appendChild(div);
  
    content.appendChild(container);
  }