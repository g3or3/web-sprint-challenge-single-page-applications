describe("Pizza Ordering Form", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/pizza");
	});

	const size = () => cy.get('select[name="size"]');
	const sauce = () => cy.get('input[name="sauce"]');
	const pepperoni = () => cy.get('input[name="Pepperoni"]');
	const sausage = () => cy.get('input[name="Sausage"]');
	const pineapple = () => cy.get('input[name="Pineapple"]');
	const substitute = () => cy.get('button[name="substituteChoice"]');
	const special = () => cy.get('input[name="special"]');
	const toggle = () => cy.get('button[name="increase"]');
	const total = () => cy.get('span[id="total"]');
	const submit = () => cy.get('button[type="submit"]');
	it("Opens the page", () => {});

	it("Lets you choose a size", () => {
		size()
			.should("exist")
			.should("have.value", "Small")
			.select("Medium")
			.should("have.value", "Medium");
	});

	it("Lets you choose a sauce", () => {
		sauce()
			.should("exist")
			.check("Original Red")
			.should("have.value", "Original Red");
	});

	it("Lets you choose toppings", () => {
		pepperoni().should("exist").check();
		sausage().should("exist").check();
		pineapple().should("exist").check();
	});

	it("Lets you toggle a substitute", () => {
		substitute().should("exist").click();
	});

	it("Lets you write special instructions", () => {
		special()
			.should("exist")
			.type("Extra cheese")
			.should("have.value", "Extra cheese");
	});

	it("Lets you update how many pizzas you want", () => {
		toggle().should("exist").click().click();
		total().contains("3");
	});

	it("Lets you submit the form", () => {
		submit().should("exist").click();
		cy.url().should("eq", "http://localhost:3000/confirmation");
	});
});
