import startWars from './index';
import {expect} from "chai";

describe('starwars-names', function(){
	describe('all', function(){
		it('should be an array of strings', function(){
			expect(startWars.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array){
				return array.every(function(item){
					return typeof item === 'string';
				});
			}
		});

		it('should contain Luke Skywalker', function(){
			expect(startWars.all).to.include('Luke Skywalker');
		});
	});

	describe('random', function(){
		it('should return a random item from the startWars all', function(){
			var randomItem = startWars.random();
			expect(startWars.all).to.include(randomItem);
		});

		it('should return an array of random item if passed a number', function(){
			var randomItems = startWars.random(3);
			expect(randomItems).to.have.length(3);
			randomItems.forEach(function(item){
				expect(startWars.all).to.include(item);
			});

		})
	});

});