export default function filterSection() {
    return(
        <div className="mt-10">
            <div className="bg-[var(--white)] w-[70vw] mx-auto p-8 drop-shadow-neutral-400 drop-shadow-lg">
                <div className="text-lg font-semibold"><p>Categories</p></div>
                <div className="flex gap-4 mt-2">
                    <div className="border border-[var(--primary)] rounded-4xl bg-[var(--white)] w-fit px-2 py-1 text-center text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-primary-light)] ">All</div>
                    <div className="border border-[var(--primary)] rounded-4xl bg-[var(--white)] w-fit px-2 py-1 text-center text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-primary-light)]">Breakfast</div>
                    <div className="border border-[var(--primary)] rounded-4xl bg-[var(--white)] w-fit px-2 py-1 text-center text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-primary-light)]">Lunch</div>
                    <div className="border border-[var(--primary)] rounded-4xl bg-[var(--white)] w-fit px-2 py-1 text-center text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-primary-light)]">Dinner</div>
                    <div className="border border-[var(--primary)] rounded-4xl bg-[var(--white)] w-fit px-2 py-1 text-center text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-primary-light)]">Desert</div>
                    <div className="border border-[var(--primary)] rounded-4xl bg-[var(--white)] w-fit px-2 py-1 text-center text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-primary-light)]">Snack</div>
                </div>
                <div className="text-lg font-semibold mt-5"><p>Dietary Preferences</p></div>
                <div className="flex gap-4 mt-2">
                    <div className="border border-[var(--primary)] rounded-4xl bg-[var(--white)] w-fit px-2 py-1 text-center text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-primary-light)]">Vegetarian</div>
                    <div className="border border-[var(--primary)] rounded-4xl bg-[var(--white)] w-fit px-2 py-1 text-center text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-primary-light)]">Vegan</div>
                    <div className="border border-[var(--primary)] rounded-4xl bg-[var(--white)] w-fit px-2 py-1 text-center text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-primary-light)]">Gluten-Free</div>
                    <div className="border border-[var(--primary)] rounded-4xl bg-[var(--white)] w-fit px-2 py-1 text-center text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-primary-light)]">Dairy-Free</div>
                    <div className="border border-[var(--primary)] rounded-4xl bg-[var(--white)] w-fit px-2 py-1 text-center text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-primary-light)]">Keto</div>
                    <div className="border border-[var(--primary)] rounded-4xl bg-[var(--white)] w-fit px-2 py-1 text-center text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-primary-light)]">Low-Carbs</div>
                </div>
            </div>
        </div>
    )
}