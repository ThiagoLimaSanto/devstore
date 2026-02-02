const List = () => {
    return (
        <div className="list">
            <div className="item active">
                <div className="product-img">
                    <img src="../../../public/apple-watch.png" alt="Apple Watch" />
                </div>

                <div className="content">
                    <p className="product-tag">Novo Lançamento</p>
                    <p className="product-name">Apple Watch Series 10</p>
                    <p className="description">O smartWatch mais avançado do mercado. Monitoramento completo de saúde, GPS integrado, tela AMOLED de alta resolução e bateria de logna duração. Perfeito para acompanhar seu estilo de vida ativo.</p>
                    <button className="btn">Saiba Mais</button>
                </div>
            </div>
            <div className="item">
                <div className="product-img">
                    <img src="../../../public/air-pods.png" alt="Air pods max" />
                </div>

                <div className="content">
                    <p className="product-tag">Som Premium</p>
                    <p className="product-name">Air Pods Max</p>
                    <p className="description">Experimente o som em sua forma mais pura. Cancelamento de ruído adaptativo, qualidade de áudio excepcional e design ergonômico par o máximo conforto. Sua música nunca soou tão bem.</p>
                    <button className="btn">Saiba Mais</button>
                </div>
            </div>
            <div className="item">
                <div className="product-img">
                    <img src="../../../public/vision-pro.png" alt="Vision pro" />
                </div>

                <div className="content">
                    <p className="product-tag">Alta Performance</p>
                    <p className="product-name">Vision Pro</p>
                    <p className="description">Realidade aumentada imersiva com Apple Vision Pro. Inovação ao alcance dos olhos.</p>
                    <button className="btn">Saiba Mais</button>
                </div>
            </div>
        </div>
    )
}

export default List