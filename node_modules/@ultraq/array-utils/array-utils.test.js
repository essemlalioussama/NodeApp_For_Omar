/* 
 * Copyright 2017, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-env jest */
import {flatten, range, remove} from './array-utils';

/**
 * Tests for the array utilities.
 */
describe('ArrayUtils', function() {

	describe('#flatten', function() {

		test('Flattens a nested array', function() {
			let result = flatten([1, [2, [[3], 4], 5]]);
			expect(result).toEqual([1, 2, 3, 4, 5]);
		});
	});

	describe('#range', function() {

		test('Returns a range of values from start to finish', function() {
			let result = range(2, 5);
			expect(result).toEqual([2, 3, 4]);
		});

		test('Returns a range of values incrementing by the specified value', function() {
			let result = range(2, 10, 3);
			expect(result).toEqual([2, 5, 8]);
		});
	});

	describe('#remove', function() {

		test('Removes matching item', function() {
			let array = [1, 2, 3];
			let result = remove(array, item => item === 2);
			expect(array).toEqual([1, 3]);
			expect(result).toBe(2);
		});
	});
});
