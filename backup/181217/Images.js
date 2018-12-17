/**
 * Created by Jung Soo-jin on 2018-11-30.
 */
const urlBase = './images/';

const Images = () => {
    return (
        {
            logo_login: require(urlBase + 'logo_login.png'),
            logo_bottom: require(urlBase + 'logo_bottom.png'),
            bg_login: require(urlBase + 'bg_login.png')
        }
    )
};
export default Images;



