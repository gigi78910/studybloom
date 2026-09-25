from pathlib import Path
import fitz

source = Path("attached_assets/Cream_Black_Organic_Cute_Personal_Planner_Presentation_1790339015148.pdf")
output_dir = Path(".agents/outputs/planner-pdf")
output_dir.mkdir(parents=True, exist_ok=True)

document = fitz.open(source)
print(f"pages={document.page_count}")
for index, page in enumerate(document):
    pixmap = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    target = output_dir / f"page-{index + 1:02d}.png"
    pixmap.save(target)
    print(target)