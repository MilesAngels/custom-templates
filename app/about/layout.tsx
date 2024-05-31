import styles from './styles.module.css'

export default function layout({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>)
 {
    return (
        <>
            <nav>About Navbar</nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}