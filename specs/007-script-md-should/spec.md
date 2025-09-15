# Feature Specification: Embed Code Snippets in Video Script

**Feature Branch**: `007-script-md-should`
**Created**: 2025-09-15
**Status**: Draft
**Input**: User description: "script.md should contain the code snippets"

---

## User Scenarios & Testing *(mandatory)*

### Primary User Story
As a content creator, I want to embed code snippets directly into the `video-script.md` file, so that the script serves as a single source of truth for both narration and the corresponding code visuals, simplifying the video generation process.

### Acceptance Scenarios
1. **Given** a `video-script.md` file containing narration and fenced code blocks.
2. **When** the video generation process is run.
3. **Then** the code from the fenced blocks is used to generate code images for the video.
4. **And** the narration (text outside the code blocks) is used to generate the voiceover.

### Edge Cases
- What happens if a code block is missing a language identifier? -> The process should default to plaintext.
- How are multiple code snippets for a single narration block handled? -> There can be several code snippets per narration section.

## Requirements *(mandatory)*

### Functional Requirements
- **FR-001**: The system MUST parse `video-script.md` to extract both narration text and fenced code blocks.
- **FR-002**: Fenced code blocks within `video-script.md` MUST be used as the source for generating code images.
- **FR-003**: The narration text (outside of code blocks) MUST continue to be used as the source for the voiceover.
- **FR-004**: The system MUST associate the correct code snippet(s) with the surrounding narration text. A code block belongs to the text block that precedes it.
- **FR-005**: The existing process of generating code images from separate files in `video-examples/src/components` MUST be replaced by this new method.

### Key Entities *(include if feature involves data)*
- **Script Segment**: A section of the video script, containing narration text and optionally one or more associated code snippets.

---

## Review & Acceptance Checklist

### Content Quality
- [ ] No implementation details (languages, frameworks, APIs)
- [ ] Focused on user value and business needs
- [ ] Written for non-technical stakeholders
- [ ] All mandatory sections completed

### Requirement Completeness
- [ ] No [NEEDS CLARIFICATION] markers remain
- [ ] Requirements are testable and unambiguous
- [ ] Success criteria are measurable
- [ ] Scope is clearly bounded
