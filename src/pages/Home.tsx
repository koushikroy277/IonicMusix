import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <IonPage className="navBg">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="nav">Nav</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="musix">
          <h1>
            Musix
          </h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
