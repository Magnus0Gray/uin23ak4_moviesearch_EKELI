import resources from '../resources/ressurser'
import { useParams } from "react-router-dom"

export default function PageContent()
{
    const { category } = useParams()
    const resource = resources.find((res) => res.category === category)

    return (

        <article>
            <h2>{resource.category}</h2>
            <span className="articleText">{resource.text}</span>
            <section className="sources"><ul>

                {resource.sources.map((source, index) => (
                 <li key={index}>
                    <a href={source.url}>
                        {source.title}
                    </a>
                </li>
                 ))}
            </ul></section>
        </article>
    )
}