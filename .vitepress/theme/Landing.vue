<template>
    <div class="lp">
        <Content />
    </div>
</template>

<style scoped>
.lp {
    max-width: 940px;
    margin: 0 auto;
    padding: 5rem 1.5rem 6rem;
}

.lp :deep(h1) {
    font-family: "Instrument Serif", Georgia, serif;
    font-size: clamp(2.6rem, 6vw, 4.2rem);
    line-height: 1.05;
    letter-spacing: -0.01em;
    color: var(--foreground);
    margin: 0 0 1rem;
}
.lp :deep(.sub) {
    font-size: 1.15rem;
    color: var(--muted-foreground);
    max-width: 34ch;
    margin: 0 0 2rem;
}
.lp :deep(.cta) {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--primary);
    color: var(--primary-foreground);
    padding: 0.7rem 1.3rem;
    border-radius: var(--radius);
    font-weight: 500;
    text-decoration: none;
}
.lp :deep(.cards) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 3rem;
}
@media (max-width: 640px) {
    .lp :deep(.cards) {
        grid-template-columns: 1fr;
    }
}
.lp :deep(.card) {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--card);
    padding: 1.25rem;
}
.lp :deep(.card .q) {
    color: var(--muted-foreground);
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
}
.lp :deep(.card .val) {
    font-family: "Geist Mono", monospace;
    font-size: 1.6rem;
    color: var(--foreground);
    margin: 0.2rem 0;
}
.lp :deep(.card .unit) {
    font-size: 0.8rem;
    color: var(--muted-foreground);
}
.lp :deep(.card .verify) {
    display: inline-block;
    margin-top: 0.8rem;
    font-size: 0.85rem;
}
.lp :deep(.card.refuse .val) {
    font-size: 1.1rem;
}
</style>
