import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  const { activeChallenge, resetChallenge, completedChallegend } = useContext(ChallengeContext)

  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    console.log("Sucesso")
    resetCountdown()
    completedChallegend()
  }
  function handleChallengeFailed() {
    console.log("Erro")
    resetChallenge()
    resetCountdown()
  }
  return (
    <div className={styles.challengeBoxContainer}>

      {activeChallenge ?
        (<div className={styles.challengeActive}>

          <header>Ganhe {activeChallenge.amount} de Xp</header>

          <main>

            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description} </p>
          </main>
          <footer>
            <button
              onClick={handleChallengeFailed}
              type="button"
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>

            <button
              onClick={handleChallengeSucceeded}
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>

        </div>) :


        (<div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo  para receber um desafio </strong>
          <p><img src="icons/level-up.svg" alt="Level up " />
        Avance de level completando desafios.
      </p>

        </div>)}

    </div>
  )
} 