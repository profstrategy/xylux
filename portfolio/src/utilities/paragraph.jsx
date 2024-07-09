const Paragraph = ({ type, children }) => {

    const styles = {
        hero_paragraph: `mt-[12px] max-w-[540px] leading-tight font-sans text-[20px]`
    }

    return (
        <>
            <div className={styles[type]}><p>{children}</p></div>
        </>
    )
}

export { Paragraph }