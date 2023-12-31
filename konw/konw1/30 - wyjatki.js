"use strict"

/* Wprowadzenie:
	Wyjątki kończą wykonywanie skryptu!
*/

// 1. tekstowy
// throw "Prosty tekstowy wyjątek"
// console.log('Wyjątek, jeśli nie został złapany, kończy wykonywanie kodu')

// ale także: throw 123, throw true

// 2. wyjątek zwracający obiekt
// throw {
// 	name: "Błąd kodzenia",
// 	message: "Lipne argumenty panie..."
// }

// j/w z użyciem fabryki wyjątków
function myException(name, msg) {
	return {
		'name': name,
		message: msg
	}
}
// throw myException('Hello', "My name is Exception. Unique Exception")

// 3. Łapanie wyjątków, 
// 4. Blok finally
try {
	throw myException('Hello', "My name is Exception. Unique Exception")
	// some code here
} catch (e) {
	console.log('[catch]', e)
} finally {
	// zawsze wykonywany kawałek kodu, niezależnie czy był wyjątek czy nie
	// zadziała również jeśli był rzucony wyjątek a nie było bloku catch
}

console.log('Kod po złapanym wyjątku działa dalej')
// uwaga z finally: 
function finallyIsAlwaysCalled() {
	try {
		return true
	} finally {
		return false // to zostanie zwrócone
	}
}
console.log(finallyIsAlwaysCalled())

// 5. Ponownie rzucanie wyjątkiem
// ponownie rzucony wyjątek leci poziom wyżej w kontekście wykonania kodu (czyli np. do funkcji wyżej)		
try {
	parseJson()
} catch (e) {
	console.log('złapany: ', e)
}
function parseJson(jsonString) {
	try {
		return JSON.parse(jsonString)
	} catch (err) {
		console.log('[parseJson] invalid json string!')
		throw '[parseJson] invalid json string!'
	}

}