# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > invalid-escape-sequence-arrow-list`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 30
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "js-parser"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unexpected token, expected ,"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceType: "script"
				end: Object {
					column: 13
					index: 13
					line: 1
				}
				start: Object {
					column: 12
					index: 12
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 11
					index: 11
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSReferenceIdentifier {
				name: "async"
				loc: Object {
					filename: "input.js"
					identifierName: "async"
					end: Object {
						column: 11
						index: 11
						line: 1
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 28
					index: 28
					line: 1
				}
				start: Object {
					column: 12
					index: 12
					line: 1
				}
			}
			expression: JSArrowFunctionExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 28
						index: 28
						line: 1
					}
					start: Object {
						column: 12
						index: 12
						line: 1
					}
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					thisType: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 16
							index: 16
							line: 1
						}
						start: Object {
							column: 12
							index: 12
							line: 1
						}
					}
					params: Array [
						JSBindingIdentifier {
							name: "x"
							loc: Object {
								filename: "input.js"
								identifierName: "x"
								end: Object {
									column: 13
									index: 13
									line: 1
								}
								start: Object {
									column: 12
									index: 12
									line: 1
								}
							}
						}
					]
				}
				body: JSBlockStatement {
					directives: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 28
							index: 28
							line: 1
						}
						start: Object {
							column: 17
							index: 17
							line: 1
						}
					}
					body: Array [
						JSExpressionStatement {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 24
									index: 24
									line: 1
								}
								start: Object {
									column: 19
									index: 19
									line: 1
								}
							}
							expression: JSReferenceIdentifier {
								name: "await"
								loc: Object {
									filename: "input.js"
									identifierName: "await"
									end: Object {
										column: 24
										index: 24
										line: 1
									}
									start: Object {
										column: 19
										index: 19
										line: 1
									}
								}
							}
						}
						JSExpressionStatement {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 26
									index: 26
									line: 1
								}
								start: Object {
									column: 25
									index: 25
									line: 1
								}
							}
							expression: JSReferenceIdentifier {
								name: "x"
								loc: Object {
									filename: "input.js"
									identifierName: "x"
									end: Object {
										column: 26
										index: 26
										line: 1
									}
									start: Object {
										column: 25
										index: 25
										line: 1
									}
								}
							}
						}
					]
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 29
					index: 29
					line: 1
				}
				start: Object {
					column: 28
					index: 28
					line: 1
				}
			}
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 29
						index: 29
						line: 1
					}
					start: Object {
						column: 28
						index: 28
						line: 1
					}
				}
			}
		}
	]
}
```
