import './Cards.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Article {
    id: number
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
}

const articleData: Article[] = [
        {
            id: 1,
            title: 'Getting Started',
            description: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
            linkText: 'Browse Article',
            linkUrl: '/getting-started'
        },
        {
            id: 2,
            title: 'Sales Questions',
            description: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
            linkText: 'Browse Article',
            linkUrl: '/sales-questions'
        },
        {
            id: 3,
            title: 'Uses Guides',
            description: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
            linkText: 'Browse Article',
            linkUrl: '/usee-guides'
        },
        {
            id: 4,
            title: 'My Account',
            description: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
            linkText: 'Browse Article',
            linkUrl: '/my-account'
        },
        {
            id: 5,
            title: 'Payment & Billing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
            linkText: 'Browse Article',
            linkUrl: '/payment-billing'
        },
        {
            id: 6,
            title: 'Knowledgebase',
            description: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
            linkText: 'Browse Article',
            linkUrl: '/knowledgebase'
        }
    
    ]
    

function Cards() {
    const [articlesData] = useState<Article[]>(articleData);
    return (
    <div className="articles">
        <div className="container">
            <div className="main-title">Browse Questions by Category</div>
            <div className="cards">
                {articlesData.map(article => {
                    return(
                        <div key={article.id} className="card">
                            <div className="title">{article.title}</div>
                            <div className="description">{article.description}</div>
                            <Link to={`/${article.linkUrl}`}>{article.linkText}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Cards
