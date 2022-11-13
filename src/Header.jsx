import header from './sass/Header.module.scss';

export const Header = () => {
  return (
    <div>
        <div className={header.head}>
            <div className={header.content}>
              <div className={header.title}>
                  <p className={header.link1} to="/">きっと</p>
                  <p>掲示板</p>
              </div>
            </div>
            <div className={header.slink}>
              <ul>
                <li></li>
                <li></li>
                <li>お問い合わせ</li>
              </ul>  
           </div>
        </div>
    </div>
  )
}

