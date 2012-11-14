Markdown syntax reference guide
===============================
Writer for Mac supports a subset of the Markdown formatting language. 
Markdown lets you apply basic formatting simply by typing characters.

In addition to Writer for Mac’s ability to Export to RTF and HTML, 
you can also convert Markdown to other formats such as .docx and PDF using programs like Marked and Pandoc.

Currently Writer for Mac displays this formatting using Auto Markdown, such as underline for *emphasis* and a bold font for **strong**. This is not supported in Writer for iOS at present.

Header
------

# Title = First level header
## Title = Second level header
### Title = Third level header
…up to six levels

Emphasis and Importance
-----------------------
Emphasis: *example* or _example_ (Command-I in Writer for Mac)
Importance: **example** or __example__ (Command-B in Writer for Mac)
Lists

Numbered lists: type 1. + space

1. Ordered list item
2. Ordered list item
3. Ordered list item
Any number can be used.

Dashed lists: type - + space

- Dashed list item
- Dashed list item
- Dashed list item



Bulleted lists: type * + space

* Bulleted list item
* Bulleted list item
* Bulleted list item


Nesting lists: You can also nest lists several levels deep, and combine them:

   * First level
  ** Second level

  1. First level
  1.1. Second level

   * First level unordered list item
* 1. Second level ordered list item
Using tab indents is also possible when using a physical keyboard, but currently there is no Tab button in the iOS on-screen keyboard, and Auto Markdown is optimized for non-tab nested lists.

* First level
    * Second level

1. First level
    1. Second level
    
Blockquotes
-----------
Type > + white space + any text (just like email):

> A quoted paragraph will be indented in Writer for Mac.
>> A double-quoted paragraph will be double-indented in Writer for Mac.

Links
-----
Link: [text to link](http://example.com/)
Link with title: [text to link](http://example.com/ "optional title")
Code

You can mark up code in-line using backticks (`code`), or add a code block by adding at least four spaces or one tab to the start of a line:

	This is a code block
	Inline formatting (like _underscores_) is ignored in a code block.

Separating paragraphs
---------------------
In Markdown syntax one tab indicates a block of code. Because of this it is not possible to use a return plus tab to indicate a new paragraph in Writer. Instead, please use one or two returns to separate paragraphs. This is related to the “Strict Markdown” setting in Writer for Mac’s export dialog.

Horizontal rules
----------------
You can add a thematic break which will be represented by a dividing line (<hr>) when exported to HTML. To do so add three or more asterisks (\*), hyphens (\-), or underscores (\_) on a line by themselves, optionally separated with spaces. For example:

* * *
or

-------------

“Escaping” Markdown formatting characters
-----------------------------------------
If you want to type a formatting character and have Writer treat it as text not formatting, type a backslash first \. This means \* gives *, \_ gives _ 
etc. Escaping isn’t needed in code blocks.
