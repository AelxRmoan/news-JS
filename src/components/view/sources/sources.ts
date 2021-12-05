import './sources.css';

interface IItem {
    name: string,
    id: string
} 

class Sources {
    draw(data: Array<object>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');

        (data).forEach((item: IItem) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            (sourceClone as Element).querySelector('.source__item-name').textContent = item.name;
            (sourceClone as Element).querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
