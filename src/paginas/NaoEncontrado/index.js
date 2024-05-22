import styles from "./NaoEncontrado.module.css";
import error404 from "assets/erro_404.png";

export default function NaoEncontrado() {
  return (
    <>
      <div className={styles.conteudoContainter}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando? Aguarde uns
        </p>

        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div className={styles.botaoContainer}>
          <button>Voltar</button>
        </div>

        <img className={styles.imagemCachorro} src={error404} alt="Cachorro" />
      </div>

      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
