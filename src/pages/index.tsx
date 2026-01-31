import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Reveal({
  children,
  delayMs = 0,
  className,
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}) {
  return (
    <div className={clsx(styles.reveal, className)} style={{'--d': `${delayMs}ms`} as any}>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackground} aria-hidden="true" />
      <div className={styles.heroNoise} aria-hidden="true" />

      <div className={clsx('container', styles.heroInner)}>
        <Reveal delayMs={0}>
          <span className={styles.pill}>
            <span className={styles.pillDot} aria-hidden="true" />
            HeatupNavi ユーザーマニュアル
          </span>
        </Reveal>

        <Reveal delayMs={80}>
          <Heading as="h1" className={styles.heroTitle}>
            エコキュートの最適化
          </Heading>
        </Reveal>

        <Reveal delayMs={140}>
          <p className={styles.heroSubtitle}>
            天気×使用頻度。データで導く、かしこい給湯最適化。
          </p>
        </Reveal>

        <Reveal delayMs={210}>
          <div className={styles.heroCtas}>
            <Link className="button button--primary button--lg" to="/docs/setup">
              初回セットアップ
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/usage">
              毎日の使い方
            </Link>
          </div>
        </Reveal>

        <div className={styles.heroMeta}>
          <Reveal delayMs={260} className={styles.metaItem}>
            <div className={styles.metaLabel}>判断軸</div>
            <div className={styles.metaValue}>天気（外気温）</div>
          </Reveal>
          <Reveal delayMs={320} className={styles.metaItem}>
            <div className={styles.metaLabel}>個別最適</div>
            <div className={styles.metaValue}>家庭の使用頻度</div>
          </Reveal>
          <Reveal delayMs={380} className={styles.metaItem}>
            <div className={styles.metaLabel}>ゴール</div>
            <div className={styles.metaValue}>湯切れ不安とムダを減らす</div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="HeatupNavi"
      description="天気×使用頻度。データで導く、かしこい給湯最適化。">
      <Hero />

      <main className={styles.main}>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className={styles.eyebrow}>WHY</div>
              <Heading as="h2" className={styles.sectionTitle}>
                「今日どうする？」を、迷わず決めるために
              </Heading>
            </div>

            <div className={styles.grid3}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>冷え込みの日は必要量が変わる</div>
                <div className={styles.cardBody}>
                  外気温が低いほど、同じ設定でも湯量や沸き上げ効率が変動しやすくなります。
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>家庭ごとに使い方が違う</div>
                <div className={styles.cardBody}>
                  朝シャワー中心、夜まとめて入浴など、生活リズムに合わせるほどムダが減ります。
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>“安全側”に戻せる安心設計</div>
                <div className={styles.cardBody}>
                  湯切れが心配なときは、段階的に調整していつでも安全側へ戻せます。
                </div>
              </div>
            </div>

            <div className={styles.inlineCta}>
              <Link className="button button--primary" to="/docs/setup">
                初回セットアップ
              </Link>
              <Link className="button button--secondary" to="/docs/settings">
                設定の詳細
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className={styles.eyebrow}>HOW</div>
              <Heading as="h2" className={styles.sectionTitle}>
                3ステップで、最適化をスタート
              </Heading>
            </div>

            <ol className={styles.steps}>
              <li>
                <div className={styles.stepNum}>1</div>
                <div>
                  <div className={styles.stepTitle}>使用頻度を入力</div>
                  <div className={styles.stepBody}>まずは「普段の感覚」でOK。後から微調整できます。</div>
                </div>
              </li>
              <li>
                <div className={styles.stepNum}>2</div>
                <div>
                  <div className={styles.stepTitle}>今日/明日のおすすめを確認</div>
                  <div className={styles.stepBody}>天気（外気温）を踏まえ、判断に必要な要点をまとめて提示します。</div>
                </div>
              </li>
              <li>
                <div className={styles.stepNum}>3</div>
                <div>
                  <div className={styles.stepTitle}>少しずつ調整して安定化</div>
                  <div className={styles.stepBody}>一度に大きく動かさず、1項目ずつが失敗しにくい運用です。</div>
                </div>
              </li>
            </ol>

            <div className={styles.inlineCta}>
              <Link className="button button--primary" to="/docs/usage">
                使い方（3ステップ）へ
              </Link>
              <Link className="button button--secondary" to="/docs/features">
                機能を見る
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className={styles.eyebrow}>HELP</div>
              <Heading as="h2" className={styles.sectionTitle}>
                困ったときの近道
              </Heading>
            </div>

            <div className={styles.grid2}>
              <div className={styles.note}>
                <div className={styles.noteTitle}>湯切れが怖い</div>
                <div className={styles.noteBody}>
                  まずは安全側で運用し、慣れてから節約方向へ。段階的な調整がポイントです。
                </div>
                <Link className={styles.noteLink} to="/docs/faq">
                  FAQを見る →
                </Link>
              </div>
              <div className={styles.note}>
                <div className={styles.noteTitle}>質問・不具合報告</div>
                <div className={styles.noteBody}>
                  再現手順やスクリーンショットがあると、確認がスムーズです。
                </div>
                <Link className={styles.noteLink} to="/docs/support">
                  お問い合わせ →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
