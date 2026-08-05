import re

with open('src/layouts/Layout.astro', 'r') as f:
    content = f.read()

style_start = content.find('<style is:global')
style_content = content[style_start:]
html_content = content[:style_start]

# We want to remove .cv-header, .header-inner ... from style_content
# Instead of complex regex, let's write a simple css parser or just replace known blocks

